import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { ControlTodo, TodoTabs } from './components'
import { ITodo } from './interfaces/todo.interface'
import { getTodosFromLocalStorage } from './utils/localStorage.utils'

function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([])

  useEffect(() => {
    const todosD = getTodosFromLocalStorage()

    if (todosD) {
      setTodos(todosD)
    }
  }, [])

  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: '#8d8690', p: 3, borderRadius: 5, '&+*': { mt: 5 } }}>
        <ControlTodo todos={todos} setTodos={setTodos} />
      </Box>
      <Box sx={{ bgcolor: '#8d8690', px: 10, py: 7, borderRadius: 5, }}>
        <TodoTabs todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  )
}

export default App
