import { ITodo } from '../interfaces/todo.interface'

export type TTodo = Omit<ITodo, 'id'>
