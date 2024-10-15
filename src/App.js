import { useState } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";

function App() {
  //react state leira a program állapott
  //ha a state ben megadott változó értéke változik a react frissiti az oldal tartalmát
  const [lepes, setLepes] = useState(0);
  const [lista, setLista] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  function katt(adat) {
    //itt akarjuk lekezelni melyik elmere kattintotttunk és mit irunk a listába
    console.log("App: ", adat);

    //1. csinálunk másolatot a listárol
    const ujlista = [...lista];
    //másolatot modositjuk
    if (lepes % 2 === 0) {
      ujlista[adat] = "X";
    } else {
      ujlista[adat] = "O";
    }

    //másolatot értékuladjuk az eredetinek
    setLista([...ujlista]);
    setLepes(lepes + 1);
    console.log(lepes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic tac toe</h1>
      </header>

      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>

      <footer>Képiró Balázs</footer>
    </div>
  );
}

export default App;
