import React, {useState } from "react";
import app from '../App.module.css'
function Exercise4() {
    const [count,setCount]=useState(0)
    return (
      <div>
          Button has been clicked {count} times
          <button onClick={()=>setCount(count+1)}>click me</button>
      </div>
    );
  }
export default Exercise4