import React from "react";
import "./cella.css"
function Cella(props) {
    function katt(id){
        console.log(`cella: ${id}`)
        props.katt(props.index)
    }
  return (
  <div>
    <div className="cella" onClick={()=>katt(props.index)}>{props.jel}</div>
  </div>
  );
}

export default Cella;
