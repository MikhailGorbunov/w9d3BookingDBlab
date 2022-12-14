import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Item from "./components/Item";
import { getBookings, postBookings, updateBookings } from "./BookingService";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setData(allBookings);
    });
  }, []);

  const removeBookings = (id) => {
    const temp = data.map((s) => s);
    const indexToDel = temp.map((s) => s._id).indexOf(id);
    temp.splice(indexToDel, 1);
    setData(temp);
  };

  const onSubmit = (booking) => {
    const temp = data.map((s) => s);
    temp.push(booking);
    postBookings(booking).then(() => {
      setData(temp);
    });
  };
  const onUpdate = (booking) => {
    const temp = data.map((s) => s);
    const indexToUpdate = temp.map((s) => s._id).indexOf(booking._id);
    temp[indexToUpdate] = booking;
    setData(temp);
  };

  return (
    <>
      <h1> This is the app </h1>
      <Form onSubmitBooking={onSubmit} />
      <Grid bookings={data} removeBookings={removeBookings} />
    </>
  );
}

export default App;
