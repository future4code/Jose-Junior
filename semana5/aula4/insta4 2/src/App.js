import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const InputPost = styled.input`
  height: 20px;
  width: 120px;
  text-align: start;
  padding: 5px;
  margin: 5px;
  font-style: italic;
  font-family: sans-serif;
  font-size: 16px;
`
const FormDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

`
const ButtonPost = styled.button`
  height: 30px;
  width: 120px;
  margin: 5px;
  font-style: italic;
  font-family: sans-serif;
  font-size: 16px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  text-align: center;
  &:focus{
    outline: none;
  }
`

class App extends React.Component {

  state = {
    posts : [
      {user: 'Paula',
       photoUser: 'https://picsum.photos/50/51',
       photoPost: 'https://picsum.photos/200/151'
     
      },
      {user: 'Veronica',
      photoUser: 'https://picsum.photos/50/53',
      photoPost: 'https://picsum.photos/200/153'
    
     },
     {user: 'Junior',
     photoUser: 'https://picsum.photos/50/52',
     photoPost: 'https://picsum.photos/200/152'
    
    }
    ],
    valorNome: '',
    valorFotoUsuario: '',
    valorFotoPost: ''
  }
  adicionaPost = ()=>{
      const NovoPost = {
        user: this.state.valorNome,
        photoUser: this.state.valorFotoUsuario,
        photoPost: this.state.valorFotoPost,
        

    }
      const NovoPostArray = [...this.state.posts, NovoPost]
      this.setState({
        posts: NovoPostArray,
        valorNome:'',
        valorFotoUsuario: '',
        valorFotoPost: ''
      }) 
      
    }
  onChangeNome = (event)=>{
    this.setState({valorNome: event.target.value})
  }
  onChangeFotoUser = (event)=>{
    this.setState({valorFotoUsuario: event.target.value})
  }
  onChangeFotoPost = (event)=>{
    this.setState({valorFotoPost: event.target.value})
  }
  
  render() {
    const arrayRenderPost = this.state.posts.map((post, idx)=>{
      return (
        <Post
        key={idx}
        nomeUsuario={post.user}
        fotoUsuario={post.photoUser}
        fotoPost={post.photoPost}
      />
      )
    });

    return (

      <div className={'app-container'}>
        <FormDiv>
          <h2>Novo Post</h2>
          <InputPost onChange={this.onChangeNome} value={this.state.valorNome} placeholder='Usuario'/>
          <InputPost onChange={this.onChangeFotoUser}value={this.state.valorFotoUsuario} placeholder='url foto perfil'/>
          <InputPost onChange={this.onChangeFotoPost} value={this.state.valorFotoPost} placeholder='url foto post'/>
          <ButtonPost onClick={this.adicionaPost}>Postar</ButtonPost>
        </FormDiv>
        
        {arrayRenderPost}
      </div>
    );
  }
}

export default App;
