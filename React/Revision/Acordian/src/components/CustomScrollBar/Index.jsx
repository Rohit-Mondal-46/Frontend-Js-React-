import React, { useState, useEffect } from "react";
import "./style.css"
function Index({ url }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, setErr] = useState(null);
  const [scrlPercentage,setScrlPercentage]=useState(0);
  async function fetchData(recievedUrl) {
    try {
      let response = await fetch(recievedUrl);
      let convertedResponse = await response.json();
      setData(convertedResponse.products);
      setloading(false);
    } catch (e) {
      setErr(e);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handlePercentageScroll() {
    let currScrlPos = document.documentElement.scrollTop || document.body.scrollTop
    let viewPortHgt = document.documentElement.clientHeight
    let scrollableHeight = document.documentElement.scrollHeight
    let scrlPercentage = (currScrlPos/(scrollableHeight-viewPortHgt)*100) 
    setScrlPercentage(scrlPercentage);
    // console.log(scrlPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", handlePercentageScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <h1>Custom Scroll</h1>
        <div className="scrl-cnt">
          <div className="curr-scrl-pos" style={{width:`${scrlPercentage}%`}}></div>
        </div>
      </div>
      <div className="datas">
        {data.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export default Index;
