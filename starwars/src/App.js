import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWarsCard from './Card';
import {Wrapper, CardTable, H1, H2, determinePage} from './Page';


function App() {
    const [dealer, setDealer] = useState({url: ""});
    const [dealt, setDealt] = useState([]);

    if (dealer.url.length === 0) setDealer({url:"https://swapi.co/api/people/"}); // init
    
    useEffect(() => {
        document.body.style.backgroundColor = "black";
        console.log("requesting starwars information");
        axios.get(dealer.url).then((result) => {
            setDealt(result.data.results.map((person, idx)=> StarWarsCard({
                key: idx,
                width: "20rem",
                height: "24rem",
                category: "People",
                character: person,
                audiofx: {saberOn: "saber1", saberSwing: "saber0"}
            })));
            console.log(`Page ${determinePage(result.data.next)}`);
            document.getElementById("saber1").play(); // sound when GET is finished.
        }).catch((error) => console.log(error));
    }, [dealer]); // (listen for dealer)

    return (
      <div className="App">
        <Wrapper>
        <H1>React Wars</H1>
        <br />
        <H2>styled-components</H2>
        <CardTable>{dealt}</CardTable>
        </Wrapper>
      </div>
  );
}

export default App;
