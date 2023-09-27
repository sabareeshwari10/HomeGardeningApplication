// FormTableComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./formtablestyle.css";

function FormTableComponent() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",  
    address: "",
    service: "",
  });

  // State to store submitted data from the server
  const [tableData, setTableData] = useState([]);

  // State to track the selected record for updating
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRecord) {
      axios
        .put(`http://localhost:8081/update/${selectedRecord.id}`, formData)
        .then((response) => {
          setTableData((prevData) =>
            prevData.map((data) =>
              data.id === selectedRecord.id ? response.data : data
            )
          );
          setFormData({
            name: "",
            mobile: "",
            address: "",
            service: "",
          });
          setSelectedRecord(null);
        });
    } else {
      axios.post("http://localhost:8081/post", formData).then((response) => {
        setTableData([...tableData, response.data]);
        setFormData({
          name: "",
          mobile: "",
          address: "",
          service: "",
        });
      });
    }
  };

  const handleUpdateClick = (record) => {
    setFormData({ ...record });
    setSelectedRecord(record);
  };

  const handleDeleteClick = (record) => {
    axios.delete(`http://localhost:8081/delete/${record.id}`).then(() => {
      setTableData((prevData) => prevData.filter((data) => data.id !== record.id));
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8081/get").then((response) => {
      setTableData(response.data);
    });
  }, []);

  return (
    <div className="form-table-container">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile No:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Service:</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {selectedRecord ? "Update" : "Submit"}
        </button>
      </form>

      <h2>Data Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Service</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.mobile}</td>
              <td>{data.address}</td>
              <td>{data.service}</td>
              <td>
                <button onClick={() => handleUpdateClick(data)}>Update</button>
                <button onClick={() => handleDeleteClick(data)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormTableComponent;
