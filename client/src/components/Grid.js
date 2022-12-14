import Item from "./Item";

const Grid = ({ bookings, removeBookings }) => {
  const bookingsList = bookings.map((booking) => {
    // console.log(booking);
    return (
      <Item
        booking={booking}
        key={booking._id}
        removeBookings={removeBookings}
      />
    );
  });

  return <div className="grid">{bookingsList}</div>;
};

export default Grid;
