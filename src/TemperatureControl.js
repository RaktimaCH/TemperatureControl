import React from "react";
import "./TempControl.css";
import { useState } from "react";

export default function TempControl(){
  const [temValue,setTempValue] = useState(10);
  const [tempColor,setTempColor] = useState("cold");

  function increment(){
      if(temValue === 30) return;

      const newTemp = temValue + 1;
       setTempValue(newTemp);
       if(newTemp >= 15){
           setTempColor("hot")
       }
  }
  function decrement(){
      if(temValue === 0) return;
      const newTemp = temValue- 1;
      setTempValue(newTemp);
      if(newTemp < 20){
          setTempColor("cold")
      }
  }
    return(
        <div className="container">
            <div className="box">
                <div className={`temp ${tempColor}`}>
                    {temValue}&#x2103;

                </div>
              </div>
                <div className="btn">
                <button onClick={increment} className="incre">+</button>
                <button  onClick={decrement} className="decre">-</button>
                </div>

            
        </div>
    );
}