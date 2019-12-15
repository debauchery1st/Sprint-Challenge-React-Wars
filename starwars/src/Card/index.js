import React from 'react';
import style from 'styled-components';

function StarWarsCard(props){
  if (!props.width) props.width = '20rem'; // set a default width
  if (!props.height) props.height = '24rem';  // set a default height

  const FX = document.getElementById(props.audiofx.saberSwing).cloneNode(); // sound fx

  const isPlainText = (item) => !props.character[item].includes("http") && 
    (typeof props.character[item] === "string") && 
    (item !== "created") && 
    (item !== "edited");
  
  const CardContainer = style.div`
  display: inline-block;
  opacity: 90%;
  margin: 0 auto;
  padding: 1rem;
  `;

  const Card = style.div`
    position: relative;
    width: ${props.width};
    height: ${props.height};
    transition: all 1s ease;
    transform-style: preserve-3d;
    :hover {
      transform: rotateY(180deg);
    }
  `;

  const CardFront = style.div`
    position: absolute;
    background: #442f11;;
    top: 0;
    left: 0;
    width: ${props.width};
    height: ${props.height};
    border-radius: 5px;
    color: #fbfffe;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  `;
  const CardBack = style.div`
    position: absolute;
    background: #5f9fdd;
    top: 0;
    left: 0;
    width: ${props.width};
    height: ${props.height};
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
  
  return(
    <CardContainer key={props.key} onMouseEnter={() => FX.play()}>
    <Card>
      <CardFront>
        <CardFrontText>{(!props.character) ? "...loading":props.character.name}</CardFrontText>
      </CardFront>
      <CardBack>
        <CardBackText>{(!props.character) ? "...loading":Object.keys(props.character).filter((key)=> isPlainText(key)).map((item) => <LI key={item}>{[item, props.character[item]].join(" : ") }</LI>)}</CardBackText>
      </CardBack>
    </Card>
  </CardContainer>
  );
}

export default StarWarsCard;
