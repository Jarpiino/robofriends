import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
// import { robots } from './robots';
import Scroll from "../components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    //if (robots.length === 0) {
    <div className="flex h-screen items-center justify-center">
      <h1 className="font-mono text-7xl font-bold">Loading...</h1>
    </div>
  ) : (
    <div className="h-screen">
      <div className="flex h-1/6 flex-col items-center justify-center gap-8">
        <h1 className="align-middle font-mono text-5xl font-bold">
          Roboto Friends
        </h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div className="h-5/6">
        <Scroll className="">
          <CardList className="" robots={filteredRobots} />
        </Scroll>
      </div>
    </div>
  );
}

export default App;
