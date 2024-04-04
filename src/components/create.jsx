import React, { useState } from "react";
import { displayType } from "../App";

const Create = ({ handleEdit, handleDisplay }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    handleEdit(userData);
    handleDisplay(displayType.table);
  };
  return (
    <>
      <form>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone :</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address :</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};

export default Create;
