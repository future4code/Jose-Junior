import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const DivMain = styled.div`

  margin-top: 100px;
  
  padding: 20px;
  height: 300px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2), 20px 0px 20px rgba(0, 0, 0, 0.2) ;
`
const Button = styled.button`
  outline: none;
  background: none;
  border-radius: 5px;
  border: 2px solid#46bb46;
  color: #46bb46;
  padding: 5px;
  min-width: 100px;
  transition: all 1s;
  &:hover{
    background-color:#46bb46 ;
    color:white;
  }

`
const Register = styled(Button)`
  border: 2px solid#4949e2;
  color: #4949e2;
  &:hover{
    
    background-color:#4949e2 ;
    color:white;
  }
`

const DeleteButton = styled(Button)`
  border: 2px solid red;
  color: red;
  &:hover{
    background-color:red ;
    color:white;
  }
`


class App extends Component {
  state ={
    users: [],
    div1: true,
    valueButton: 'Ver Usuarios',
    valorEmail: '',
    valorUser: ''
  }
  onChangePage = ()=>{
    this.setState({div1: !this.state.div1,
                  valueButton : this.state.valueButton === 'Ver Usuarios'? 
                  'Voltar': 'Ver Usuarios'
                  })
    
  }
  postUser = ()=>{
    const body = {
      name: this.state.valorUser,
      email: this.state.valorEmail
    }
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "Jose-Junior-dumont"
        }
      }
    )
    .then((respose) => {
      alert("Usuario registrado");
    })
    .catch((error) => {
      alert(error.message);
    });

    this.setState({valorEmail:'', valorUser:''})
  }

  componentDidMount = ()=>{
   this.getUsers()
  }

  componentDidUpdate = ()=>{
    this.getUsers()
  }

  getUsers =()=>{
    axios
  .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: "Jose-Junior-dumont"
    }
  })
  .then((resposta) => {
    this.setState({users: resposta.data});
  })
  .catch((error) => {
    alert(error.message);
  });
  }
  

  deleteUser =(id)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
    {
      headers: {
        Authorization: "Jose-Junior-dumont"
      }
    }).then((resposta) => {
      console.log(resposta.data);
    }).catch((error) => {
      alert(error.message);
    });
    }
  

  render(){

    return (
      <DivMain>
        
      {this.state.div1?
      <>
      <label htmlFor="user">Nome de Usuario</label>
      <input onChange={e=>{this.setState({valorUser: e.target.value})}} value={this.state.valorUser}type="text"/>

      <label htmlFor="email">Email</label>
      <input onChange={e=>{this.setState({valorEmail: e.target.value})}} value={this.state.valorEmail} type="email"/> 
      <Register onClick={this.postUser}>REGISTRAR</Register>
      </>: this.state.users.map(user=>{
        return( 
          <div key={user.id}>
             <p><em>{user.name}</em></p><DeleteButton onClick={()=>this.deleteUser(user.id)}>Apagar usuario</DeleteButton>
          </div>
        )
        
      })}
        
        <Button onClick={this.onChangePage} >
          {this.state.valueButton}
        </Button>
      </DivMain>
    );
  }
}

export default App;
