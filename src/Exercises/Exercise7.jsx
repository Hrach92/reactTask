import React, { useState } from "react";
function Exercise7() {
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    return (
      <div>
          <div><input type='text' placeholder="First Name" onChange={(e)=>setName(e.target.value)}/></div>
          <div><input type='text' placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/></div>
          <div><button onClick={()=>alert(`hello ${name} ${lastName}`)}>Greet me</button></div>
      </div>
    );
  }
export default Exercise7