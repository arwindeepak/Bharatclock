import { useEffect, useState } from "react";

export default function BharatClock(){
  const [time,setTime]=useState(new Date());
  
    useEffect(()=>{
      const intervalId=setInterval(()=>{
        setTime(new Date());
      },1000);
      return ()=>{
        clearTimeout(intervalId);
        
      }
    })
    return(
        <>
      <h1>Bharat Clock</h1>
        <p>The present date at the moment is :{time.toLocaleDateString()}</p>
        <p>The present time at the moment is :{time.toLocaleTimeString()}</p>
        </>
    );
}