import React from "react";
import { useParams, Link } from "react-router-dom";

function About() {
  const { name } = useParams();
  return (
    <React.Fragment>
      <div>
        Welcome <h2>{name}</h2>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </React.Fragment>
  );
}

export default About;
