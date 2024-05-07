import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  // prothome amara kotodiner jonno search kortesi ta get kora lagbe queryString theke
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  // date fns er maddhome koto din (numDays) purber date chacchi ta ber korbo, remember: supabase expects a iso string date.
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    // jodio amader already akta bookings key ache but akhane different dependency use korchi so 'same name' e problem hobe na.
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  // we also need to know if staying is confirmed or not --> we will check it by status, weather it is checked-in or out
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, stays, confirmedStays, numDays };
}
