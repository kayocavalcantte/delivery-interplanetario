import { Link } from "react-router-dom";
import './Endereço.css'

function Endereço() {
  return (
    <div className="editarEndereco">
      <Link to="/editar"><button className="butaoEditar"><strong>Editar</strong></button></Link>
      <div className="box">
        <div className="containerEditar">
        <div className="image">
          imagem
        </div>
        <div className="informacao">
          <h1>Joao Marcelo</h1>
          <h3>+55 (00) 0000 0000</h3>
          <h5>Rua fiscal vieira, 1234 - Brasil</h5>
        </div>
        </div>
    </div>
    
  </div> 
  )
}

export default Endereço
