import React from 'react';
import './Editar.css';
import { Link } from 'react-router-dom';

function Editar(){
    return (
      <div className='address'>
  
        <div className='container'>
          
          <div className="header">
            <h2>Endereço da Terra</h2>
          </div>
  
          <form id='form' className='form'  >
            <div className="form-content">
              <label htmlFor="Nome">Nome</label>
              <input type="text" id="Nome" name="Nome" placeholder='João Marcelo' required/>
  
              <label htmlFor="Pais">Pais</label>
              <input type="text" id="Pais" name="Pais" placeholder='Brasil' required/>
  
              <label htmlFor="Estado">Estado</label>
              <input type="text" id="Estado" name="Estado" placeholder='Ceara' required/>
  
              <label htmlFor="Cidade">Cidade</label>
              <input type="text" id="Cidade" name="Cidade" placeholder='Fortaleza' required/>
  
              <label htmlFor="Rua">Rua</label>
              <input type="text" id="Rua" name="Rua" placeholder='Fiscal Vieira' required/>
  
              <label htmlFor="Numero">Numero</label>
              <input type="text" id="Numero" name="Numero" placeholder='1234' required />
  
              <label htmlFor="CEP">CEP</label>
              <input type="text" id="CEP" name="CEP" placeholder='60120170' required/>
  
              <label htmlFor="Complemento">Complemento</label>
              <input type="text" id="Complemento" name="Complemento" placeholder='123' required/>
  
              <h2>Endereço Marte</h2>
              <label htmlFor="Endereço">Endereço</label>
              <input type="text" id="Endereço" name="Endereço" placeholder='1234' required />
              
              <Link to="/"><button className='enviar'><strong>Cadastrar</strong></button></Link>
            </div>
          </form>
        </div>
  
      </div>
    )
  }

  export default Editar;
  