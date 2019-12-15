import React from 'react';
import style from 'styled-components'


const CardContainer = style.div`
  display: inline-block;
  opacity: 90%;
  margin: 0 auto;
  padding: 1rem;
`;

const Card = style.div`
  position: relative;
  width: 24rem;
  height: 24rem;
  transition: all .9s ease;
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
  width: 24rem;
  height: 24rem;
  border-radius: 5px;
  color: #fbfffe;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
const CardBack = style.div`
  position: absolute;
  background: #5f9fdd;
  top: 0;
  left: 0;
  width: 24rem;
  height: 24rem;
  border-radius: 5px;
  color: #fbfffe;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transform: rotateY(180deg);
  `;

const CardFrontText = style.h2`
  font-size: 1.9rem;
`;

const CardBackText = style.p`
  font-size: 1.2rem;
`;

function StarWarsCard(props){
  // const front = 
  // 4. **clone <audio>, to allow overlap.**
  const FX = document.getElementById(props.audiofx.saberSwing).cloneNode();
  function lightSaber() {
    // 5. **play our (cloned) <audio>**
    FX.play();
  }
  return(
    <CardContainer key={props.key} onMouseEnter={() => lightSaber()}>
    <Card>
      <CardFront>
        <CardFrontText>{(!props.character) ? "...loading":props.character.name}</CardFrontText>
      </CardFront>
      <CardBack>
        <CardBackText>{(!props.character) ? "...loading":props.character.name}</CardBackText>
      </CardBack>
    </Card>
  </CardContainer>
  );
}
  
export default StarWarsCard;
