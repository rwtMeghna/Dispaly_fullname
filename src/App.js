import React, { useState } from "react";
export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  const handle = (e) => {
    e.preventDefault();
    setFull(`${first} ${last}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>

      <form onSubmit={handle}>
        <div>
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            value={first}
            required
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {full && <p>Full Name:{full}</p>}
    </div>
  );
}