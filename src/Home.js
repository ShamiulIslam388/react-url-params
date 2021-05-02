import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/about/${name ? name : "aboutpage"}`}>
        <button>Click to About</button>
      </Link>
    </React.Fragment>
  );
}

export default Home;
