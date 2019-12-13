import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const StarWarsCard = (props) => {
  // props [category, name, birth_year]
  return (
      <Card key={props.key}>
        <CardBody>
  <CardTitle>{props.character.name}</CardTitle>
          <CardText>
            <li>height: {props.character.height || "waiting for response from server"}</li>
            <li>mass: {props.character.mass}</li>
            <li>hair: {props.character.hair_color}</li>
            <li>skin: {props.character.skin_color}</li>
            <li>eyes: {props.character.eye_color}</li>
            <li>born: {props.character.birth_year}</li>
            <li>gender: {props.character.gender}</li>
          </CardText>
        </CardBody>
      </Card>
  );
};

export default StarWarsCard;
