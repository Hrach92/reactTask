import React, { useEffect } from "react";
import app from '../App.module.css'
function Exercise2() {
    function Click(){
        alert('clicked')
    }
    return (
      <div>
        <button onClick={Click}>click me</button>
      </div>
    );
  }
export default Exercise2