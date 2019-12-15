import React from 'react';
import style from 'styled-components'


const CardContainer = style.div`
  display: inline-block;
  opacity: 90%;
  margin: 0 auto;
  padding: 1rem;
`;

const makeCard = (width, height) => style.div`
  position: relative;
  width: ${width};
  height: ${height};
  transition: all 1s ease;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

const makeCardFront = (width, height) => style.div`
  position: absolute;
  background: #442f11;;
  top: 0;
  left: 0;
  width: ${width};
  height: ${height};
  border-radius: 5px;
  color: #fbfffe;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const makeCardBack = (width, height) =>style.div`
  position: absolute;
  background: #5f9fdd;
  top: 0;
  left: 0;
  width: ${width};
  height: ${height};
  border-radius: 5px;
  color: #fbfffe;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transform: rotateY(180deg);
  `;

const CardFrontText = style.h2`
  font-size: 1.2rem;
`;

const CardBackText = style.p`
  font-size: 1.2rem;
`;

const LI = style.li`
  display: flex;
  font-size: .8rem;
`;

function ListItem(value, key) {
  return (
  <LI key={key}>{value}</LI>
  );
}

function StarWarsCard(props){
  // const front = 
  // 4. **clone <audio>, to allow overlap.**
  const FX = document.getElementById(props.audiofx.saberSwing).cloneNode();
  function lightSaber() {
    // 5. **play our (cloned) <audio>**
    FX.play();
  }
  const CARD_WIDTH = (!props.width) ? '20rem':props.width;
  const CARD_HEIGHT = (!props.height) ? '24rem':props.height;
  const Card = makeCard(CARD_WIDTH, CARD_HEIGHT);
  const CardBack = makeCardBack(CARD_WIDTH, CARD_HEIGHT);
  const CardFront = makeCardFront(CARD_WIDTH, CARD_HEIGHT);
  const details = Object.keys(props.character)
  .filter((key)=> !props.character[key].includes("http") && typeof props.character[key] === "string" && key !== "created" && key !== "edited")
  .map((key) => ListItem(`${key}: ${props.character[key]}`, key));

  return(
    <CardContainer key={props.key} onMouseEnter={() => lightSaber()}>
    <Card>
      <CardFront>
        <CardFrontText>{(!props.character) ? "...loading":props.character.name}</CardFrontText>
      </CardFront>
      <CardBack>
        <CardBackText>{(!props.character) ? "...loading":details}</CardBackText>
      </CardBack>
    </Card>
  </CardContainer>
  );
}

export default StarWarsCard;
