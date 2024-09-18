import "./App.css";
import React, { useEffect, useState } from "react";
import CustomTable from "./components/customTable";

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetching data
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/search/repositories?q=facebook/react")
      const jsonData = await response.json()
      setData(jsonData.items);
      setTableData(jsonData.items);
      setLoading(false);
    }
    fetchData()
  }, []);

  // defining columns for table
  const column = [
    { field: "name", headerName: "Name", width: 700 },
    { field: "stargazers_count", headerName: "Stars", width: 200 },
    { field: "forks", headerName: "Forks", width: 200 },
  ];

  // list of columns to be consider for search.
  const includeColumns = ["name", "stargazers_count", "forks"];

  // handle change event of search input
  const handleSearch = (value) => {
    setSearch(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value?.toLowerCase().trim();
    if (lowercasedValue === "") setTableData(data);
    else {
      const filteredData = data?.filter((item) => {
        return Object.keys(item).some((key) =>
          includeColumns.includes(key)
            ? item[key].toString().toLowerCase().includes(lowercasedValue)
            : false
        );
      });
      setTableData(filteredData);
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="search ......."
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
      </div>
      {loading ? (
        <p>loading......</p>
      ) : (
        <CustomTable data={tableData} columns={column} />
      )}
    </div>
  );
}

export default App;
