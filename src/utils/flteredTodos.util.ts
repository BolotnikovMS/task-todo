import { ITodo } from '../interfaces/todo.interface'
import { TFilter } from '../types/filter.type'

export const getFilteredTodos = (todos: ITodo[], typeFilter: TFilter) => {
  switch (typeFilter) {
    case 'pending':
      return todos.filter(todo => !todo.checked && !todo.deleted)
    case 'all':
      return todos
    case 'completed':
      return todos.filter(todo => todo.checked && !todo.deleted)
    case 'deleted':
      return todos.filter(todo => todo.deleted)
    default:
      return todos
  }
}


