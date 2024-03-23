import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  // filter
  const filterVal = searchParams.get("status");
  const filter =
    !filterVal || filterVal === "all"
      ? null
      : {
          field: "status",
          value: filterVal,
        };
  //  { dhoror totalPrice name field ache jekahne amra 'gte' value chacchi.
  //     field: "totalPrice",
  //     value: 5000,
  // method : 'gte'
  //   };
  ////// jodi multiple condition same time match er dorkar hoto like -- amra status & price->gte both condition same time match chacchi, tahole amra akta obje na pathaya array of obj pathabo then 'apiBookings' e receive korar pore ta map kore kaj korbo.
  // sort
  const sortBy = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBy.split("-");
  const sortByFilter = { field, direction };
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // getting bookings data
  const {
    data: { data: bookingsData, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortByFilter, page],
    queryFn: () => getBookings({ filter, sortByFilter, page }),
  });

  // prefetching
  // count -> total results
  // PAGE_SIZE -> number of results to show per page
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortByFilter, page + 1],
      queryFn: () => getBookings({ filter, sortByFilter, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortByFilter, page - 1],
      queryFn: () => getBookings({ filter, sortByFilter, page: page - 1 }),
    });
  return { bookingsData, isLoading, error, count };
}
