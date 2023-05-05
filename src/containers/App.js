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
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1>Roboto Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
