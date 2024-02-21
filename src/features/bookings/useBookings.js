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
  const {
    data: bookingsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });
  return { bookingsData, isLoading, error };
}
