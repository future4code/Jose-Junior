import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  margin: 5px;
  padding: 3px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
let id = 0
class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

    if(localStorage.getItem('tasks')){
      const novaTarefas = JSON.parse(localStorage.getItem('tasks'))
      return this.setState({tarefas: novaTarefas})
    }

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {
    const newTask = {texto: this.state.inputValue, completa: false, id: id}
    const novaTarefas = [...this.state.tarefas, newTask]
    this.setState({tarefas: novaTarefas})

    localStorage.setItem('tasks', JSON.stringify(novaTarefas))
    this.setState({inputValue: ''})
    id++
  }

  selectTarefa = (id) => {
      const tarefas = this.state.tarefas
      tarefas.forEach(tarefa=>{
      
       return tarefa.id === id ? tarefa.completa = !tarefa.completa : tarefa.completa
       
      })
      this.setState({tarefas: tarefas})
  }

  deleteTask = (id) => {
    const tarefas = this.state.tarefas.filter(tarefa=>{
      return tarefa.id !== id
    })
  
    this.setState({tarefas: tarefas})
    localStorage.setItem('tasks', JSON.stringify(tarefas))
}

  onChangeFilter = (event) => {
      this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deleteTask(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
        <p>*double click para deletar tarefa</p>
        <p>*click para completar tarefa</p>
      </div>
    )
  }
}

export default App
