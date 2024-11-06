import { ITodo } from '../interfaces/todo.interface'

export const getTodosFromLocalStorage = (): ITodo[] | null => {
  const data: string | null = localStorage.getItem('todos')

  if (data) {
    return JSON.parse(data)
  }

  return null
}


export const setTodosFromLocalStorage = (key: string, data: ITodo[]): void => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeTodosFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key)
}
