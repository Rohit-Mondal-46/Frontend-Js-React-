import React, { useState } from 'react'

function Index() {

    const [color,setColor] = useState("#000000")
    const [colorType,setColorType] = useState("hex")
    function handleBgColor(){
        if(colorType==="hex"){
            let colorArr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
            let temp = '#';
            for(let i=0; i<6;i++){
                let code = colorArr[Math.floor(Math.random()*16)]
                temp+=code;
            }
            setColor(temp);
        }
        else{
            let r = Math.floor(Math.random()*360)
            let g = Math.floor(Math.random()*360)
            let b = Math.floor(Math.random()*360)
            setColor(`rgb(${r},${g},${b})`)
        }
        console.log(color);
    }
  return (
    <>
        <button onClick={()=>handleBgColor()}>Generate</button>
        <button style={{
            margin:"5px"
        }} onClick={()=>setColorType('hex')}>Hex</button>
        <button style={{
            margin:"5px"
        }}  onClick={()=>setColorType('rgb')}>Rgb</button>
        <div style={{
            height:"100vh",
            width:"100vw",
            background: color
        }}>
            {(colorType==="hex")? <h1>{color}</h1>:<h1>{color}</h1>}
        </div>
    </>
  )
}

export default Index