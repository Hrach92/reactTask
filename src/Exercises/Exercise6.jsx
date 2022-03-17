import React from "react";
import app from '../App.module.css'
import {state} from './state'
function Exercise6() {
    return (
      <div>
        {state.animals.map(a=>{
            return <div key={a.id}>
                <img src={a.icon} className={app.icon}/> <span>{a.name}</span>
            </div>
        })}
      </div>
    );
  }
export default Exercise6
  