import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import { useBookings } from "./useBookings";
// import Menus from "../../ui/Menus";

function BookingTable() {
  const { bookingsData, isLoading } = useBookings();
  // if (!bookingsData.length) return <h3>No bookings data</h3>;
  //console.log("bdata", bookingsData);
  return (
    // <Menus>
    <Table cols="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>
      {bookingsData?.map((booking) => (
        <BookingRow key={booking.id} booking={booking} />
      ))}
      {/* <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      /> */}
    </Table>
    // </Menus>
  );
}

export default BookingTable;
