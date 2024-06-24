import React from 'react';
import "./ArrayOfRecords.css";

const records = [
    {id: 1, name: "Deepak Yadav", email: "dpk@gmail.com", address: "Jaipur"},
    {id: 2, name: "Pawan Kalakar", email: "pwn@gmail.com", address: "Jaipur"},
    {id: 3, name: "Dinesh Sharma", email: "dnsh@gmail.com", address: "Jaipur"},
    {id: 4, name: "Gulshan Kumawat", email: "glshn@gmail.com", address: "Jaipur"}
];

function ArrayOfRecords() {
  return (
    <>
      <h1>2. Array of Records</h1>
      <ul className="records-list">
        {
          records.map((record) => (
            <React.Fragment key={record.id}>
              <li className="record-item">
                <h3>Name:</h3>{record.name}
              </li>
              <li className="record-item">
                <h3>Email:</h3>{record.email}
              </li>
              <li className="record-item">
                <h3>Address:</h3>{record.address}
              </li>
            </React.Fragment>
          ))
        }
      </ul>
    </>
  );
}

export default ArrayOfRecords;
