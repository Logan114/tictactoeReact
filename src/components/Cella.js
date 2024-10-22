import React, { useContext } from "react";
import "./cella.css"
import { KattContext } from "../KattContext";
function Cella(props) {
  const {Katt}=useContext(KattContext)
    function kattintas(){
        Katt(props.index)
    }
  return (
  <div>
    <div className="cella" onClick={()=>kattintas()}>{props.jel}</div>
  </div>
  );
}

export default Cella;
