import React, { useState, useEffect } from 'react';
import './App.css';
import StarWarsCard from "./Card";
import axios from "axios";

// var gIS = require("g-i-s");

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [apiState, setApiState] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const [page, setPage] = useState(0);
  const swPeopleURL = "https://swapi.co/api/people/";
  // const quantImages = (q) => {
  //   return `https://www.qwant.com/?q=${q.split(" ").join("%20")}&t=images&license=public`;
  // }
  // function getFirstResult(q) {
  //   axios.get(quantImages(q)).then((results) =>{
  //     console.log(results.data)
  //   }).catch((err) =>console.log)
  // }
  //document.getElementsByClassName("result result--images first").item(0).querySelector("a").href;
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
      setPeopleList(r2d2says.results.map((person, idx)=> StarWarsCard({
        key: idx, 
        category: "People", 
        character: person,
        // images: () => gIS(person.name).data
      })));
      const [kw, arg] = r2d2says.next.split("?")[1].split("=");
      if (kw.toLowerCase() === "page") {
        const getPage = parseInt(arg) - 1;
        setPage(getPage);
        console.log(`Page: ${getPage}`);
      };
    }).catch((error) => console.log(apiState));
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div key={page} className="card-case">
        {peopleList}
      </div>
    </div>
  );
}

export default App;
