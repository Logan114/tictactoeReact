/* azt szeretnénk hogy egyetlen helyen tudjuk kezelni a globális változókat
pl Katt fuggvényt
illetve a listát
nem kő buborékolni, az adatok több komponensen való átadására
a Context tartalmazza az állapotot, az adatokat itt módosítjuk
Provider fogja tartalmazni az állapotot, adatokat itt tudjuk módosítani és azt rendeli hozzá a contexthez

use context hook - itt mondjuk az egyes komponensekben hogy melyik adatot akarjuk ott felhasználni
*/

import { createContext, useState } from "react";

export const KattContext = createContext("")
//létrehozunk egy providert ehez a contexthez
export const KattProvider= ({children})=>{
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

  function Katt(adat) {
    //itt akarjuk lekezelni melyik elmere Kattintotttunk és mit irunk a listába
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
    <KattContext.Provider value={{ lista, Katt }}>
      {children}
    </KattContext.Provider>
  );
};