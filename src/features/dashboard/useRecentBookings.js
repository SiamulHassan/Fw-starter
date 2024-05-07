import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  // prothome amara kotodiner jonno search kortesi ta get kora lagbe queryString theke
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  // date fns er maddhome koto din (numDays) purber date chacchi ta ber korbo, remember: supabase expects a iso string date.
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    // jodio amader already akta bookings key ache but akhane different dependency use korchi so 'same name' e problem hobe na.
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });
  return { isLoading, bookings };
}
