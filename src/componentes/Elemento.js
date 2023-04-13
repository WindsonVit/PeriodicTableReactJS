import "./Elemento.css";

const Elemento = (props) => {
  const getBackgroundColor = () => {
    //Verifica o tipo de elemento com base na propriedade "tipo" através das props
    switch (props.tipo) {
      case "hidrogenio":
        return "#697a83";
      case "metal-representativo":
        return "#d1202d";
      case "nao-metais":
        return "#f5a720";
      case "metal-de-transicao-externa":
        return "#9bbfe2";
      case "Lantanídeos":
        return "#2796d2";
      case "Actinídeos":
        return "#76c8a9";
      case "gases-nobres":
        return "#7e5399";
      default:
        return "#fff";
    }
  };

  // Obtém o background color com base no tipo de elemento
  const backgroundColor = getBackgroundColor();

  return (
    <div className="elemento-hover">
      <div className="elemento-container" style={{ backgroundColor }}>
        <div className="n-atomico">{props.natomico}</div>
        <div className="simbolo">{props.simbolo}</div>
        <div className="nome">{props.nome}</div>
        <div className="massa">{props.massa}</div>
      </div>
    </div>
  );
};

export default Elemento;
