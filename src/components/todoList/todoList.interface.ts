import { ITodo } from '../../interfaces/todo.interface'

export interface IPropsTodoList {
  todosData: ITodo[] | []
  handleChangeStatusTodo: (id: number, key: keyof ITodo) => void
}
