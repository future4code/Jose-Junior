import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	let [valueInput, setValueInput] = useState('')


	const onChangeComentario = (event) => {
		setValueInput(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={valueInput}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(valueInput, setValueInput) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario