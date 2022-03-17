import React from "react";
function Exercise5() {
    const arr=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
      <div>
          <ul>
              {arr.map(v=><li>{v}</li>)}
          </ul>
      </div>
    );
  }
export default Exercise5