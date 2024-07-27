import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Change to Uppercase");
  let addedText = (e) => {
    let newText = e.target.value;
    setText(newText);
  };
  let changeCase = () => {
    let newText;
    if (btnText == "Change to Uppercase") {
      newText = text.toUpperCase();
      setBtnText("Change to Lowercase");
      props.showMessege("Text is converted into Uppercase", "success");
    } else {
      newText = text.toLowerCase();
      setBtnText("Change to Uppercase");
      props.showMessege("Text is converted into Lowercase", "success");
    }
    setText(newText);
  };
  let clearText = () => {
    setText("");
    props.showMessege("Input field is cleared ", "success");
  };
  let copy = () => {
    navigator.clipboard.writeText(text);
    props.showMessege("Copied to clipboard", "success");
  };
  let arr = text.split(" ");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            {props.title}{" "}
          </h1>
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter your text here..."
            value={text}
            onChange={addedText}
          ></textarea>
        </div>
        <button className={`btn btn-${props.color} mx-1`} onClick={changeCase}>
          {btnText}
        </button>
        <button className={`btn btn-${props.color} mx-1`} onClick={copy}>
          Copy to ClipBoard
        </button>
        <button className={`btn btn-${props.color} mx-1`} onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Your text summary
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <b>{arr[arr.length - 1] == "" ? arr.length - 1 : arr.length}</b> words
          and <b>{text.length}</b> characters.
        </p>
        <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h3>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </>
  );
}

export default TextArea;
