import './App.css';
import "./css/Style.css";
import { medida as showMedida } from "./Logic";
/*  const bici =new URL("./Img/Bicicleta.jpg", import.meta.url)  */
function App(props) {
  const action = (e) => {
  e.preventDefault();
  const value = document.getElementById('Sizeipt').value;
    showMedida(Number(value));
  };
  return (
  <>
    <section className="Nav">
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link text-white" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Sobre mi</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Contactos</a>
  </li>
</ul>

    </section>
  <section className='Main-container'>
    <div className='Title' > 
  <h1>Medidor de tallas para bicicletas</h1>
  </div>
 
  
<div  className='Formulario' class="border border-dark" >
<form >
   
           <input type="number" name='name'  class="form-control" 
           placeholder="Digite su Size" id="Sizeipt" aria-label="Example text with button addon" 
           aria-describedby="button-addon1"/>
           <input  class="btn btn-secondary" disabled type="submit" value="Click" id="btnclick" onClick={action} />
           
           
</form>

</div>
</section>
</>
  
  );
}

export default App;
