import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWarsCard from './Card';
import {Wrapper, CardTable, H1, H2, determinePage, Button} from './Page';

function App() {
    const [dealer, setDealer] = useState({url: ""});
    const [dealt, setDealt] = useState([]);
    const [paginator, setPaginator] = useState({next: "", prev: ""});

    if (dealer.url.length === 0) setDealer({url:"https://swapi.co/api/people/"}); // init
    
    useEffect(() => {
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
            setPaginator({next: result.data.next, prev: result.data.previous});
            console.log(`Page ${determinePage(result.data.next)}`);
            document.getElementById("saber1").play(); // sound when GET is finished.
        }).catch((error) => console.log(error));
    }, [dealer]); // (listen for dealer)

    const previousPage = () => paginator.prev ? setDealer({url: paginator.prev}):true;
    const nextPage = () => paginator.next ? setDealer({url: paginator.next}):true;
    
    return (
      <div className="App">
        <Wrapper>
        <H1>React Wars</H1>
        <br />
        <H2>styled-components</H2>
        {paginator.prev ? <Button onClick={() => previousPage()}>Prev</Button>:""}        
        <CardTable>{dealt}</CardTable>
        {paginator.next ? <Button onClick={() => nextPage()}>Next</Button>:""}        
        </Wrapper>
      </div>
  );
}

export default App;
