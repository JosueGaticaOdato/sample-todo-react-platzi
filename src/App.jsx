import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import {TodoSearch} from './TodoSearch'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Cortar cebolla 2', completed: false},
  { text: 'Cortar cebolla 3', completed: true},
  { text: 'Cortar cebolla 4', completed: false}
]


function App() {

  return (
    <div>
      <TodoCounter total={5} completed={2}/>
      <TodoSearch/>
            
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </div>
  )
}

export default App
