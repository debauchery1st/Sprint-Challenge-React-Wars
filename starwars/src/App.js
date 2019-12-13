import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [apiState, setApiState] = useState("");
  const swPeopleURL = "https://swapi.co/api/people/";
  
  const previousPage = () => apiState.previous
  const nextPage = () => apiState.next; 

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect((f=setApiState) => {
    console.log("requesting starwars information");
    new axios.get(swPeopleURL).then((result) => {
      const r2d2says = result.data;
      f(r2d2says);
    }).catch((error) => console.log);
  }, [swPeopleURL]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
