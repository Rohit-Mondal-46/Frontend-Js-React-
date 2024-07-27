import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import { useState,useEffect } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = () =>{
    setThemeMode("lights")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themeBtn */}
              <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
