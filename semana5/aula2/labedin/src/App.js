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
          imagem="https://lh3.googleusercontent.com/a-/AOh14GiSRKbS1FJIBb8hF8W67PR59Tk7iDaXypC-B5_4hA=s192-c-rg-br100" 
          nome="Jose Junior" 
          descricao="Oi, eu sou o Jose Junior. Um dos alunos da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem='https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png'
          nome='Email'
          info='foo@labenu.com.br'
        />
          <CardPequeno 
          imagem='https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-location-icon-png-image_317888.jpg'
          nome='Endereco'
          info='Rua dos Bobos, Numero Zero'
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
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
