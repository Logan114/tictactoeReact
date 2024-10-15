import React from "react";
import Cella from "./Cella";
function Jatekter(props) {
    function katt(adat){
        props.katt(`${adat}`)
    }
    console.log(props.lista)
  return (
  <>

  {
    props.lista.map((e,i)=>
    {
        
        return(<Cella jel={e} key={i} index={i} katt={katt} />)
    }
    )
  }
  </>
  );
}

export default Jatekter;
