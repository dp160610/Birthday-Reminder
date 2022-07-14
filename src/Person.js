import React, { useState } from "react";
import "./App.css";
import { data } from "./data";

const Person = () => {
  const [state, setState] = useState(data);

  const handleClick = () => {
    setState([]);
  };
  return (
    <>
      <h3>{state.length} birthdays today</h3>
      {state.map((person) => {
        return (
          <article className="person">
            <img src={person.img} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
      <button type="button" className="clear-btn" onClick={handleClick}>
        Clear All
      </button>
    </>
  );
};

export default Person;
