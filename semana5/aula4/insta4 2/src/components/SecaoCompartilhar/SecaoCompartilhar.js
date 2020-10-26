import React, { Component } from 'react';
import './SecaoCompartilhar.css'


class SecaoCompartilhar extends Component {
    state = { 
        share: '',
        compartilhado: false,
        mensagem: ''
     }

    compartilharPost = (valor)=>{
        if(valor === this.state.share){
            this.setState({compartilhado: false, mensagem:''})
            
        }else{
             this.setState({ share: valor, compartilhado: true})
        }
    } 

    onChangeMessage = (event)=>{
        this.setState({
            mensagem: event.target.value
        })
    
    }
    
    render() { 
        let compartilhado
        if(this.state.compartilhado){
            compartilhado = <div>
                <p>Post Compartilhado no <b>{this.state.share}</b> </p>
                <div>
        <p>com a mensagem: <b>{this.state.mensagem}</b></p>    
                </div>
            </div>
        }else if (this.state.share !== ''){
            compartilhado = <div>
                <p>Post Compartilhado ja foi compartilhado no seu {this.state.share}!</p>
                </div>   
        }
        return ( 
            <div>
                <div className="share-conteiner">
                    <input
                     onChange={this.onChangeMessage}
                     value={this.state.mensagem}
                     placeholder='Mensagem'/>
                <button onClick={()=>this.compartilharPost('Facebook')}>
                    <img src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" alt=""/>
                </button>
                <button onClick={()=>this.compartilharPost('WhatsApp')}>
                    <img src="https://www.iconpacks.net/icons/1/free-whatsapp-icon-121-thumb.png" alt=""/>
                </button>
                <button onClick={()=>this.compartilharPost('Twitter')}>
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt=""/>
                </button>
              
            </div>
              <div className='mensagen'>
                {compartilhado}
            </div>
            </div>
            
         );
    }
}
 
export default SecaoCompartilhar;