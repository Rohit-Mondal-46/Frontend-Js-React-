import React, { useState } from "react";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState(null);
  let showMessege = (msg, typ) => {
    setAlert({
      messege: msg,
      type: typ,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light");
  let changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showMessege("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMessege("Light mode enabled", "success");
    }
  };
  const [color, setColor] = useState("");
  let changeColor = (e)=>{
      // console.log(e.target.value);
      setColor(e.target.value);
  }
  return (
    <>
      <Navbar name="Case Converter" mode={mode} toggleMode={changeMode} changeColor = {changeColor} />
      <Alert alert={alert} />
      <TextArea
        title="Enter your text here"
        mode={mode}
        toggleMode={changeMode}
        showMessege={showMessege} 
        color = {color}
      />
    </>
  );
}

export default App;
