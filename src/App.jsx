import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/table";
import Create from "./components/create";
import Details from "./components/details";

export const displayType = {
  table: "table",
  edit: "edit",
  details: "details",
};

function App() {
  const [userData, setUserData] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Elm St",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-123-4567",
      address: "789 Oak St",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-987-6543",
      address: "321 Pine St",
    },
    {
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "777-555-8888",
      address: "567 Maple St",
    },
    {
      name: "Michael Wilson",
      email: "michael@example.com",
      phone: "333-222-1111",
      address: "910 Cherry St",
    },
    {
      name: "Sarah Taylor",
      email: "sarah@example.com",
      phone: "222-333-4444",
      address: "246 Birch St",
    },
    {
      name: "David Lee",
      email: "david@example.com",
      phone: "111-777-9999",
      address: "135 Walnut St",
    },
  ]);

  const [displayData, setDisplayData] = useState(displayType.table);
  const [singleDisplayData, setSingleDisplayData] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleDisplay = (type, data) => {
    setDisplayData(type);
    setSingleDisplayData(data);
  };

  const handleEdit = (data) => {
    setUserData((prevData) => [...prevData, data]);
  };

  const removeUserByName = (nameToRemove) => {
    setUserData((prevUserData) =>
      prevUserData.filter((user) => user.name !== nameToRemove)
    );
  };

  const filteredData = userData.filter((user) =>
    user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const displayBox = (type) => {
    switch (type) {
      case "table":
        return (
          <Table
            data={searchText ? filteredData : userData}
            handleDelete={removeUserByName}
            handleDisplay={handleDisplay}
          />
        );

      case "edit":
        return <Create handleEdit={handleEdit} handleDisplay={handleDisplay} />;

      case "details":
        return (
          <Details data={singleDisplayData} handleDisplay={handleDisplay} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="search-wrap">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button onClick={() => setDisplayData(displayType.edit)}>Create</button>
      </div>
      {displayBox(displayData)}
    </>
  );
}

export default App;
