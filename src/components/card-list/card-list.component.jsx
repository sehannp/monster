import React from "react";
import "./card-list.style.css";

///this component only cares about 'displaying' the components within it.

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};
