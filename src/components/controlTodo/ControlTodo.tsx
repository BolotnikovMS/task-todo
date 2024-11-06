import AddIcon from '@mui/icons-material/Add'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, useState, type FC } from 'react'
import { TTodo } from '../../types/todo.type'
import { removeTodosFromLocalStorage, setTodosFromLocalStorage } from '../../utils/localStorage.utils'
import { IPropsControlTodo } from './controlTodo.interface'
import { btnAdd, btnClear, textFieldStyle, wrapper } from './style'

const ControlTodo: FC<IPropsControlTodo> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState<TTodo | null>(null)
  const handleClear = () => {
    setTodos([])
    removeTodosFromLocalStorage('todos')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target

    setNewTodo({ body: value, checked: false, deleted: false })
  }
  const handleAdd = () => {
    if (!newTodo || !newTodo.body.trim()) return

    const newTodoWithId = { ...newTodo, id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1 }

    setTodos([...todos, newTodoWithId])
    setTodosFromLocalStorage('todos', [...todos, newTodoWithId])
    setNewTodo(null)
  }

  return (
    <Box sx={wrapper}>
      <Button sx={btnAdd} variant="contained" startIcon={<AddIcon />} onClick={handleAdd} aria-label='Добавить'>
        Добавить
      </Button>
      <TextField sx={textFieldStyle} label="Пополните список..." variant="standard" size='small' value={newTodo?.body ?? ''} onChange={(e) => handleChange(e)} aria-label='Пополните список' />
      <Button sx={btnClear} variant="contained" startIcon={<ClearAllIcon />} onClick={handleClear} aria-label='Очистить'>
        Очистить
      </Button>
    </Box>
  )
}

export default ControlTodo
