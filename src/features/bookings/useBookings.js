import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  // filter
  const filterVal = searchParams.get("status");
  const filter =
    !filterVal || filterVal === "all"
      ? null
      : {
          field: "status",
          value: filterVal,
        };
  // sort
  const sortBy = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBy.split("-");
  const sortByFilter = { field, direction };
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: bookingsData, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortByFilter, page],
    queryFn: () => getBookings({ filter, sortByFilter, page }),
  });
  return { bookingsData, isLoading, error, count };
}
