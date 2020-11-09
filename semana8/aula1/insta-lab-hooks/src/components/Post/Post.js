import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

let iconeCurtida = iconeCoracaoBranco
const Post = (props) => {
  const [likeIcon, setLikeIcon] = useState(false)
  const [valueCountLikes, setValueCount] = useState(0)
  const [comment, setComment] = useState(false)
  const [arrayComments, setArrayComments] = useState([])
  const [valueCountComments, setValueCountComments] = useState(0)

  const onClickCurtida = () => {
    if(likeIcon === false){
      iconeCurtida = iconeCoracaoPreto
      setValueCount(valueCountLikes + 1)
      setLikeIcon(true)
    }else{
      iconeCurtida = iconeCoracaoBranco
      setValueCount(valueCountLikes - 1)
      setLikeIcon(false)
    }
  };

  const onClickComentario = () => {
    setComment(!comment)
  };

  const enviarComentario = (comentario, setValueInput) => {
    const newArrayComments = [...arrayComments, comentario]
    setArrayComments(newArrayComments)
    setValueCountComments(valueCountComments + 1)
    setValueInput('')
  }

  
 let caixaDeComentario = arrayComments.map(comment=>{
return <p>{comment}</p>
 })
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
           icone={iconeCurtida}
          onClickIcone={onClickCurtida}
           valorContador={valueCountLikes}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={valueCountComments}
        />
      </PostFooter>
      {comment && <SecaoComentario enviarComentario={enviarComentario}/>}
      {comment && caixaDeComentario}
    </PostContainer>
  )
}

export default Post