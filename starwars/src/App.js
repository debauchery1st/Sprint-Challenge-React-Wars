import React, { useState, useEffect } from 'react';
import axios from "axios";

import style from "styled-components";
import StarWarsCard from "./Card";

const WrapperDiv = style.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: Fira Code, monospace;
  letter-spacing: 2px;  
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  background-image: url('/sw-bg.jpg');
  background-attachment: fixed;
`;

const CardTable = style.div`
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;
const H1 = style.h1`
    text-align: center;
`;
const H2 = style.h2`
    text-align: center;
`;
function App() {
    const [apiState, setApiState] = useState([]);
    const [peopleList, setPeopleList] = useState([]);
    const [page, setPage] = useState(0);  
    //    1. **declare audio within ../public/index.html**
    //    2. **store a reference to your audio selectors in state**
    const [audioFX] = useState({
        saberOn: "saber1",
        saberSwing: "saber0",
    });    
    const swPeopleURL = "https://swapi.co/api/people/";
    useEffect(() => {
        console.log("requesting starwars information");
        new axios.get(swPeopleURL).then((result) => {
            document.getElementById(audioFX.saberOn).play();
            const r2d2says = result.data;
            setApiState(r2d2says);
            setPeopleList(r2d2says.results.map((person, idx)=> StarWarsCard({
                key: idx, 
                category: "People", 
                character: person,
                audiofx: audioFX // 3. **pass the audio refs through props**
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
        <WrapperDiv>
        <H1>React Wars</H1>
        <br />
        <H2>styled-components</H2>
        <CardTable>{peopleList}</CardTable>
        </WrapperDiv>
      </div>
  );
}

export default App;