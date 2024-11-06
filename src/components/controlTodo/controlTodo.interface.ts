import { ITodo } from '../../interfaces/todo.interface'

export interface IPropsControlTodo {
  todos: ITodo[] | []
  setTodos: (todos: ITodo[] | []) => void
}
