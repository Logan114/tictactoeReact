import { useContext, useState } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";
import { KattContext, KattProvider } from "./KattContext.js";
function App() {
  //react state leira a program állapott
  /*  <KattContext.Provider value={{lista,Katt}}> /*minden olyan komponensven amely a játéktér gyereke használhatjuk a providerben megadott értékeket*/
  //</KattContext.Provider>
  //ha a state ben megadott változó értéke változik a react frissiti az oldal tartalmát
  //itt akarjuk használni a listát
  const { lista } = useContext(KattContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic tac toe</h1>
      </header>

      <article>
        <KattProvider>
          <Jatekter lista={lista} />
        </KattProvider>
      </article>

      <footer>Képiró Balázs</footer>
    </div>
  );
}

export default App;
