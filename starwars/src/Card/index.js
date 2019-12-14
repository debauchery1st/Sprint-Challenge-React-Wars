import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';

const StarWarsCard = (props) => {
    // 4. **clone <audio>, to allow overlap.**
  const FX = document.getElementById(props.audiofx.saberSwing).cloneNode();
  function lightSaber() {
    // 5. **play our (cloned) <audio>**
    FX.play();
  }
  return (
   <div key={["card", props.key, "container"].join("")} className="card-container" onMouseEnter={() => lightSaber()} >
      <Card key={["card",props.key, "-front"].join("")} className="card">
        <CardBody className="front">
          <CardTitle>{props.character.name}</CardTitle>
        </CardBody>
        <CardBody className="back">
          <CardHeader>{props.character.name}</CardHeader>
          <CardText>
            <br/>
              <li>height: {props.character.height}</li>
              <li>mass: {props.character.mass}</li>
              <li>hair: {props.character.hair_color}</li>
              <li>skin: {props.character.skin_color}</li>
              <li>eyes: {props.character.eye_color}</li>
              <li>born: {props.character.birth_year}</li>
              <li>gender: {props.character.gender}</li>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StarWarsCard;
