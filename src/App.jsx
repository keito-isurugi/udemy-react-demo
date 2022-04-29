import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("hoge");
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    console.log("useeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaseShowFlag(true);
      } else {
        faseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>Hello</h1>
      <ColorfulMessage color="blue">わーるど</ColorfulMessage>
      <ColorfulMessage color="pink">ほげほげ</ColorfulMessage>
      <button onClick={onClickCountUp}>countUp</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faseShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
