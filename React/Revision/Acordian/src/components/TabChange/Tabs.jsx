import React, { useState } from "react";
import "./style.css"
function Tabs({ tabsContent }) {
  const [currIndex, setCurrIndex] = useState(0);
  function handleIndex(idx){
    setCurrIndex(idx)
  }
  return (
    <>
    <div className="main">
      {tabsContent.map((tabItem,index) => (
          <div 
          key={tabItem.label} 
          className="title"
          onClick={()=>handleIndex(index)}
          >
          {tabItem.label}
        </div>
      ))}
    </div>
    <div className="contents">
        {tabsContent[currIndex] && tabsContent[currIndex].content}
    </div>
      </>
  );
}

export default Tabs;
