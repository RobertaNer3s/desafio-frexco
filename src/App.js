import logo from "./logo.svg";
import "./App.css";
import RobertaImg from "./assets/roberta.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Olá, meu nome é Roberta, estou participando do desafio para o Estágio
          em DevOps na Frexco!
        </p>
        <img src={RobertaImg} className="imgroberta" />
        <h2>Como realizei o desafio?</h2>

        <p>
          Para a resolução do desafio, realizei a instalação do react com o
          create react app. <br/> Durante o processo de resolução, foi utilizado docker e docker-compose.
        </p>
        <p>
          {" "}
          Na realização de acesso foi feito o mapeamento da porta 80 para a porta 8080. A build foi feita em react, ora, por ser o ideal para a
          produção,<br/> e em seguida, 
          utilizou-se do NGINX para a criação de um simples servidor HTTP.
        </p>
      </header>
    </div>
  );
}

export default App;
