import { useState } from "react"
import React from 'react'

const Form = () => {
    const [formDetails, setFormDetails] = useState({ fname: "", lname: "" });
  const [fullName, setFullName] = useState("");

  const handleFnameChange = (e) => {
    setFormDetails((prev) => ({ ...prev, fname: e.target.value }));
  };
  const handleLnameChange = (e) => {
    setFormDetails((prev) => ({ ...prev, lname: e.target.value }));
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const fullName = formData[0].value + " " + formData[1].value;
    setFullName(fullName);
  };
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleformsubmit}>
        <label htmlFor="fname">
          First Name:
          <input
            required
            type="text"
            id="fname"
            value={formDetails.fname}
            onChange={(e) => handleFnameChange(e)}
          />
        </label>
        <br />
        <label htmlFor="lname">
          Last Name:
          <input
            required
            type="text"
            id="lname"
            value={formDetails.lname}
            onChange={(e) => handleLnameChange(e)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName !== "" ? (
        <>
          <p>Full Name: {`${fullName}`}</p>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Form