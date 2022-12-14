import { deleteBookings } from "../BookingService";
import { updateBookings } from "../BookingService";
import { useState } from "react";

const Item = ({ booking, removeBookings, onUpDate }) => {
  //   console.log(booking);
  const [status, setStatus] = useState(null);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeSubmit = (status) => {
    updateBookings(booking._id, status).then(() => {
      onUpDate(booking._id);
    });
  };

  const handleDelete = () => {
    deleteBookings(booking._id).then(() => {
      removeBookings(booking._id);
    });
  };

  return (
    <div className="item">
      <h2>{booking.guest_name}</h2>
      <h3>{booking.email}</h3>
      {booking.checked_in ? <h4>checked in</h4> : <h4> not checked in</h4>}
      <button onClick={handleDelete}>🗑</button>
      <form onSubmit={handleChangeSubmit}>
        <label htmlFor="false">Not Checked in</label>
        <input
          type="radio"
          id="false"
          name="checked_in"
          value="false"
          onChange={handleStatusChange}
        ></input>

        <label htmlFor="true">Checked In</label>
        <input
          type="radio"
          id="true"
          name="checked_in"
          value="true"
          onChange={handleStatusChange}
        ></input>
        <input type="submit" value="Save Item"></input>
      </form>
    </div>
    // :rubbish_bin:
  );
};

export default Item;
