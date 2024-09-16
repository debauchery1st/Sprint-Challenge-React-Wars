import style from "styled-components";

function determinePage(nextUrl) {
    // console.log(nextUrl);
    const [kw, arg] = nextUrl.split("?")[1].split("=");
    if (kw.toLowerCase() === "page") {
        return (parseInt(arg) - 1);
    };
    return 1;
}
const ButtonWrapper = style.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`;

const Button = style.button`
  font-family: Fira Code, monospace;
  letter-spacing: 2px;
  background-color: #fcfffe;
  text-shadow: 1px 1px 5px #fff;
  box-shadow: 0 15px 23px 0 rgba(0, 0, 0, 0.4), 0 1rem 1rem 0 rgba(0, 0, 0, 0.20);
  margin 1rem;
  padding: 1rem;
  border-radius: 5px;
  color: #221f20;
  :hover {
      background-color: #221f20;
      color: #fcfffe;
  }
  `;

const Wrapper = style.div`
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

export {Wrapper, CardTable, H1, H2, determinePage, Button, ButtonWrapper}
