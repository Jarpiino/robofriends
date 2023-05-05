import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="flex h-fit flex-col gap-4 rounded-lg bg-teal-800 p-5 text-center shadow-lg shadow-slate-300 duration-150 hover:scale-105 hover:shadow-xl">
      <img
        className=""
        alt="sussy"
        src={`https://robohash.org/${id}?200x200`}
      ></img>
      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="truncate">{email}</p>
      </div>
    </div>
  );
};

export default Card;
