import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import Botao from '../components/Botao';
import './Itens.css';
import imagem from './humaaans-space.png';
const ItensPage = function () {
   
   const botaoCriarClicado = function (){
       alert ('Seja Bem Vindo');
   }
   
   
   
   
    return (
        <>
           <Cabecalho />
            <main> 
                <button onClick= {botaoCriarClicado}>Clique</button>
                <h1>Itens</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>   
            {(true) && (
                <form>
               <label>
                   Nome:
                   <input type= "text" placeholder= "Nome" />
                </label>
                <label>
                    Descrição: 
                    <textarea placeholder="Descrição"></textarea>
                </label>
            </form>
            )} 
             <Botao texto = "Entrar"/> <Botao texto= "Voltar"/> 
            </main> 
            <img src={imagem} alt="" />
             <Rodape />
        </>
    );
};

export default ItensPage;