"use client"
import React,{useState} from "react";

 
function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h1 className="count">Count: {count}</h1>
      <button  onClick={() => setCount(count + 1)} className="Increment">Increment  </button>
      <button onClick={()=>setCount(count-1)} className="Decrement"> Decrement</button>
    </div>
  );
}

export default Count;

 