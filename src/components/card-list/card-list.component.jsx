import React from "react";
import { Card } from "../card/card.component";

import "./card-list.style.css";

///this is the component containing all the cards. The big all around enclosing component
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monsters={monster} />
    ))}
  </div>
);
