import foto from './img/diandrey-ecker.jpg'
import './App.css';

function App() {
  const saudacao =()=>{
    alert('Que você tenha uma ótima noite!')
  }

  return (

    <div className="App">
      <h1>Olá, Eu sou o Diandrey!</h1>
      <img src={foto} className="foto-diandrey" alt='foto'/>
      <p>Esse é o meu primeiro site React</p>
      <button onClick={saudacao}>Aperte este botão</button>
    </div>
  );
}

export default App;
