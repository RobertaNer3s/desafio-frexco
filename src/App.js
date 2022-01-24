import logo from './logo.svg';
import './App.css';
import RobertaImg from './assets/roberta.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p
          
        >
          Olá, meu nome é Roberta, estou participando do desafio para o Estágio em DevOps na Frexco!
          
        </p>
        <img src={RobertaImg} className='imgroberta'/>
       
      </header>
    </div>
  );
}

export default App;
