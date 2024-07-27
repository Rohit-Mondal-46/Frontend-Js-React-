import { useState } from "react";
import { ThemeProvider, useThemeContext } from "./Contexts/ThemeContext";
import { ThemeContext } from "./Contexts/ThemeContext";
import Outer from "./components/Outer";
import Inner from "./components/Inner";
function App() {
  // const { currentTheme} = useThemeContext();
  const [theme, setTheme] = useState("light");
  const changeTheme = ()=>{
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <ThemeProvider value={{ theme, setTheme }}>
        <div data-bs-theme={theme}>
          <ul className="nav nav-tabs ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Github
              </a>
            </li>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                value=""
                checked={theme==="dark"}
                onChange={changeTheme}
                id="flexSwitchCheckChecked"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable dark mode
              </label>
            </div>
          </ul>
        </div>
        <Outer />
      </ThemeProvider>
    </>
  );
}

export default App;
