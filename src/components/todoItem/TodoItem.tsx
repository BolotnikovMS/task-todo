import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { type FC } from 'react'
import { IPropsTodoItem } from './todoItem.interface'
import { todoItemStyle } from './todoItem.style'

const TodoItem: FC<IPropsTodoItem> = ({ todo, handleChangeStatusTodo }) => {
  return (
    <Box sx={todoItemStyle}>
      <Typography sx={{
        marginBottom: 0,
        textDecoration: todo.checked || todo.deleted ? 'line-through' : 'none',
        color: todo.checked ? '#000' : '#dcdadd'
      }} variant="body2" gutterBottom>
        {todo.body}
      </Typography>
      <Box>
        <Tooltip title={todo.checked ? 'Вернуть' : 'Завершить'}>
          <IconButton aria-label="Завершить" onClick={() => handleChangeStatusTodo(todo.id, 'checked')}>
            {todo.checked ? <RestartAltIcon /> : <CheckIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={todo.deleted ? 'Вернуть' : 'Удалить'}>
          <IconButton aria-label="Удалить" onClick={() => handleChangeStatusTodo(todo.id, 'deleted')}>
            {todo.deleted ? <RestartAltIcon /> : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box >
  )
}

export default TodoItem
