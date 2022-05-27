import React from "react";

// import React, { useState } from 'react';
import "./style.css";

function Contact() {
  // // Here we set two state variables for firstName and lastName using `useState`
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = e.target;

  //   // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  //   return name === 'name' ? setName(value) : setEmail(value) ;

  // };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${name}`);
    alert(`Hello `);
    // setName('');
    // setEmail('');
    // setMessage('');
  };

  return (
    <div>
      <p>{/* Hello {name}  */}</p>
      <form className="form">
        <input
          // value={name}
          name="name"
          // onChange={handleInputChange}
          type="text"
          placeholder=" Name"
        />
        <input
          // value={email}
          name="email"
          // onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          // value={message}
          name="message"
          // onChange={handleInputChange}
          type="text"
          placeholder="What message would you like to add"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
