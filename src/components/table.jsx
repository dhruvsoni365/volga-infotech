import React from "react";
import { displayType } from "../App";

const Table = ({ data, handleDelete, handleDisplay }) => {
  const generateRows = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {item.name}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {item.email}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {item.phone}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button onClick={() => handleDelete(item.name)}>Delete</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button onClick={() => handleDisplay(displayType.details, item)}>
              Details
            </button>
          </td>
          {/* <td>{item.Address}</td> */}
        </tr>
      );
    });
  };
  return (
    <>
      {data && data.length > 0 ? (
        <>
          <h2>Table</h2>
          <table style={{ border: "1px solid black" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black" }}>Name</th>
                <th style={{ border: "1px solid black" }}>Email</th>
                <th style={{ border: "1px solid black" }}>Phone</th>
                <th style={{ border: "1px solid black" }}></th>
                <th style={{ border: "1px solid black" }}></th>
              </tr>
            </thead>
            <tbody>{generateRows()}</tbody>
          </table>
        </>
      ) : null}
    </>
  );
};

export default Table;
