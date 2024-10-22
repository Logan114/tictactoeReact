import React, { useContext } from "react";
import Cella from "./Cella";
import { KattContext } from "../KattContext";

function Jatekter(props) {
 const {katt}=useContext(KattContext);
 //const {katt}=useContext(KattContext);

  return (
    <>
      {props.lista.map((e, i) => {
        return <Cella jel={e} key={i} index={i} katt={katt} />;
      })}
    </>
  );
}

export default Jatekter;
