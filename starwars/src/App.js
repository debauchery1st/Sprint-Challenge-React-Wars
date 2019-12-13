import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Card";
import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [apiState, setApiState] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const swPeopleURL = "https://swapi.co/api/people/";
  // const previousPageURL = () => apiState.previous
  // const nextPageURL = () => apiState.next;

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    console.log("requesting starwars information");
    new axios.get(swPeopleURL).then((result) => {
      const r2d2says = result.data;
      setApiState(r2d2says);
      setPeopleList(r2d2says.results.map((person, idx)=> Card({key: idx, category: "People", character: person})));
    }).catch((error) => console.log(apiState));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <br />
      {peopleList}
    </div>
  );
}

export default App;
