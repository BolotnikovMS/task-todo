import { ITodo } from '../../interfaces/todo.interface'

export interface IPropsTodoItem {
  todo: ITodo,
  handleChangeStatusTodo: (id: number, key: keyof ITodo) => void
}
