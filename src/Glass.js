import React, { useState } from "react";
import { data } from "./data";

function Glass() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(() => {
      const newPeople = people.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <div className="glass">
      <div className="birthday-list">
        {people.map((person) => {
          const { id, image, name, age, birthday } = person;
          return (
            <div key={id} className="person">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="details">
                <h4>{name}</h4>
                <p><strong>Age:</strong> {age}</p>
                <small>
                  <p>{birthday}</p>
                </small>
              </div>
              <div>
                <button onClick={() => removePerson(id)}><small>Wish them</small></button>
              </div>
            </div>
          );
        })}
        ;
      </div>
      <button
        className="btn"
        onClick={() =>
          setPeople(() => {
            return [];
          })
        }
      >
        Clear
      </button>
    </div>
  );
}

export default Glass;
