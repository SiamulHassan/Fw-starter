import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // bookings in total
  const numBookings = bookings.length;
  console.log(confirmedStays, "nae");
  // sales
  const sales = bookings.reduce(
    (acc, curBooking) => acc + curBooking.totalPrice,
    0
  );
  // check ins
  const checkIns = confirmedStays.length;

  // occupancy rate --> kotojon hotel e stay kortese(dokholer har)
  // num checked in nights / all avaible nights __> this is actual formula
  // 90 day te 90 night na , it will be 90*total cabins so, total night = (total day * total cabins)
  const ocupency =
    confirmedStays.reduce((acc, curStays) => acc + curStays.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(ocupency * 100) + "%"}
      />
    </>
  );
};

export default Stats;
