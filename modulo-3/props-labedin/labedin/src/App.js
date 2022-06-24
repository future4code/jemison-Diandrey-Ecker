import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="http://spiteful-engine.surge.sh/static/media/diandrey-ecker.18e7e3c83730069b5b26.jpg" 
          nome="Diandrey" 
          descricao="Oi, eu sou o Diandrey. Tenho 32 anos e moro na cidade de Três Barras do Paraná - PR, sou formado em Engenharia Civil e estou estudando na Labenu para mudar de carreira profissional."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
          <CardPequeno
            imagem='https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1656036979~hmac=0f83ee779f1e8e4d7d76b8c4dd983753'
            email='E-mail: diandreyecker@hotmail.com'
          />
          <CardPequeno
            imagem='https://cdn-icons-png.flaticon.com/512/1239/1239525.png'
            endereco='Endereço: Rua Labenu'
          />
            </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Diandrey" 
          descricao="Graduado em Engenharia Civil - Universidade Paranaense - 2015" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
