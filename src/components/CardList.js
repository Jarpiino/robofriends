import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="grid gap-5 p-5 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-5">
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
