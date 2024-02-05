import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor,setTypeOfColor]=useState('hex');
    const [color,setColor]=useState('#000000')

    function RandomColorUlit(length){
        return Math.floor(Math.random()*length)
    }

    function handleHexRandom(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor='#';
        for(let i=0;i<6;i++){
            hexColor+= hex[RandomColorUlit(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleRgbRandom(){
        const r=RandomColorUlit(256)
        const g=RandomColorUlit(256)
        const b=RandomColorUlit(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(()=>{
        if(typeOfColor==='rgb') handleRgbRandom()
        else handleHexRandom()
    },[typeOfColor])
  return (
    <div style={{width:'100vw',height:'100vh',background:color}}>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor==='hex'?handleHexRandom:handleRgbRandom}>Generate Random Color</button>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#fff',fontSize:'60px',marginTop:'50px'}}>
        <h3>{typeOfColor ==='hex' ? 'HEX Code' : 'RGB Color'}</h3>
        <h1>{color}</h1>
         </div>
    </div>
  )
}

export default RandomColor;
