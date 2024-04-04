import React from "react";
import { displayType } from "../App";

const Details = ({ data, handleDisplay }) => {
  return (
    <div>
      <p>Name : {data.name},</p>
      <p>email : {data.email},</p>
      <p>phone : {data.phone},</p>
      <p>address :{data.address}</p>
      <button onClick={() => handleDisplay(displayType.table)}>
        Back to Table
      </button>
    </div>
  );
};

export default Details;
