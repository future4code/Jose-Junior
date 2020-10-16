import React from 'react'
import './Post.css'
import SecaoCompartilhar from '../SecaoCompartilhar/SecaoCompartilhar'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import bookmarkWhite from '../../img/bookmark_border-24px.svg'
import bookmarkBlack from '../../img/bookmark-24px.svg'
import shareButton from '../../img/share-24px.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    marcado: false,
    compartilhado: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
   
    if(this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
      this.setState({curtido: false})
    }else{
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
      this.setState({curtido: true})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickMarcado = () => {
    console.log('marcado')
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickShare = () => {
    
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
    
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    let iconeMarcado

    if(this.state.marcado) {
      iconeMarcado = bookmarkBlack
    } else {
      iconeMarcado = bookmarkWhite
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let compartilhado

    if(this.state.compartilhado){
      compartilhado = <SecaoCompartilhar/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
          onClick={this.onClickCurtida}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        
        <IconeComContador
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcado}
        />
        <IconeComContador
          icone={shareButton}
          onClickIcone={this.onClickShare}
        />
      </div>
      
      {componenteComentario}
      {compartilhado}
    </div>
  }
}

export default Post