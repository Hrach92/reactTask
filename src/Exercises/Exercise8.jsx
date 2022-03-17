import axios from "axios";
import React, { useEffect, useState } from "react";
import app from '../App.module.css'
import { state } from "./state";
function Exercise8() {
    const [animals,setAnimals]=useState(state.animals)
    return (
      <div className={app.animals}>
          {animals.map(a=>{
              return <div key ={a.id} className={app.animal}>
                  <div><img src={a.image} className={app.img}/></div>
                  <div>{a.name}</div>
              </div>
          })}
      </div>
    );
  }
export default Exercise8