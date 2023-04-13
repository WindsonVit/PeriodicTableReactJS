import Tabela from "./componentes/Tabela";
import React from "react";
import Ajuda from "./componentes/img/ajuda.png";

function App() {
  return (
    <div>
      <div className="centralizar">
      <img src={Ajuda} alt="Exemplo de imagem" className="ajuda-img" />
      </div>
      <Tabela></Tabela>
    </div>
  );
}

export default App;
