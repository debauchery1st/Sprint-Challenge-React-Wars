import style from "styled-components";

function determinePage(nextUrl) {
    // console.log(nextUrl);
    const [kw, arg] = nextUrl.split("?")[1].split("=");
    if (kw.toLowerCase() === "page") {
        return (parseInt(arg) - 1);
    };
    return 1;
}

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

export {Wrapper, CardTable, H1, H2, determinePage}
