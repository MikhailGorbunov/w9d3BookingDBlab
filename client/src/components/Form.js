import React, { useState } from "react";

const Form = ({ onSubmitBooking }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameToSubmit = name.trim();
    const emailToSubmit = email.trim();
    const statusToSubmit = status;
    if (!nameToSubmit || !emailToSubmit) {
      return alert("complete all fields in the form!!!!!!!!!!!!");
    }

    onSubmitBooking({
      guest_name: nameToSubmit,
      email: emailToSubmit,
      checked_in: statusToSubmit,
    });

    setName("");
    setEmail("");
    setStatus(null);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="your email"
          value={email}
          onChange={handleEmailChange}
        />

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
  );
};

export default Form;
