import { TabContext, TabList, TabPanel } from '@mui/lab'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { SyntheticEvent, useState, type FC } from 'react'
import { ITodo } from '../../interfaces/todo.interface'
import { getFilteredTodos } from '../../utils/flteredTodos.util'
import { setTodosFromLocalStorage } from '../../utils/localStorage.utils'
import TodoList from '../todoList/TodoList'
import { tabStyle, tabWrapper } from './tab.style'
import { dataTabs } from './todoTabs.data'

const TodoTabs: FC<{ todos: ITodo[] | [], setTodos: (todos: ITodo[] | []) => void }> = ({ todos, setTodos }) => {
  const [tab, setTab] = useState<number>(1)
  const handleChangeTab = (event: SyntheticEvent, newValue: number) => setTab(newValue)
  const handleChangeStatusTodo = (id: number, key: keyof ITodo) => {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, [key]: !todo[key] } : todo)

    setTodos(updatedTodos)
    setTodosFromLocalStorage('todos', updatedTodos)
  }

  return (
    <Box sx={tabWrapper}>
      <TabContext value={tab}>
        <TabList onChange={handleChangeTab} centered>
          {dataTabs.map(tab => (
            <Tab key={tab.id} sx={tabStyle} label={`${tab.name} (${getFilteredTodos(todos, tab.filter).length})`} value={tab.id} aria-label={tab.name} />
          ))}
        </TabList>
        {dataTabs.map(tab => (
          <TabPanel key={tab.id} value={tab.id}>
            <TodoList todosData={getFilteredTodos(todos, tab.filter)} handleChangeStatusTodo={handleChangeStatusTodo} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

export default TodoTabs
