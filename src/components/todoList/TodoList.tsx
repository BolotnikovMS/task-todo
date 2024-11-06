import { Box } from '@mui/material'
import { type FC } from 'react'
import TodoItem from '../todoItem/TodoItem'
import { IPropsTodoList } from './todoList.interface'
import { todoListWrappr } from './todoList.style'

const TodoList: FC<IPropsTodoList> = ({ todosData, handleChangeStatusTodo }) => {
  if (!todosData || !todosData.length) return <p className='text-message'>Нет данных для отображения!</p>

  return (
    <Box sx={todoListWrappr}>
      {todosData.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleChangeStatusTodo={handleChangeStatusTodo} />
      ))}
    </Box>
  )
}

export default TodoList
