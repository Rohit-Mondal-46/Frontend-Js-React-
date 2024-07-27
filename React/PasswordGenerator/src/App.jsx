import { useState,useCallback, useEffect, useRef} from "react";

function App() {
  // state declaration
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const passwordRef = useRef(null);
  let generate = useCallback(()=>{
    let pass = "";
    let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.log(allChars.length);
    if(isNum) allChars+="1234567890";
    if(isSpecialChar) allChars+="!@#$%&*-_?";
    console.log(allChars.length);
    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random()*allChars.length + 1);
      pass += allChars.charAt(ind);
    }
    setPassword(pass);
  },[setPassword,length,isNum,isSpecialChar]);

  useEffect(()=>{
    generate();
  },[length,isNum,isSpecialChar,generate])

  let copy = ()=>{
    passwordRef.current?.select() 
    navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Pass
          </span>
          <input
            type="text"
            className="form-control"
            value={password}
            ref={passwordRef}
            readOnly
            aria-label="Username"
            aria-describedby="addon-wrapping"
            />
        </div>

        <input
          type="range"
          className="form-range"
          min="8"
          max="20"
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          id="customRange2"
        ></input>
        <div className="container">
          <button type="button" className="btn btn-primary mx-1" onClick={copy}>
            Copy
          </button>
          <span>Length:{length}</span>
          <span className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={()=>{
                setIsNum((prev)=>!prev)
              }}
              defaultChecked = {isNum}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Add Numbers
            </label>
          </span>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={()=>{
                setIsSpecialChar((prev)=>!prev)
              }}
              defaultChecked = {isSpecialChar}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Add Special Chars
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
