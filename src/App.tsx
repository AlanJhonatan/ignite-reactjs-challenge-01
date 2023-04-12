import { useState } from 'react'
import { Header } from './components/Header'
import { TodoBoard } from './components/TodoBoard'
import { TodoInput } from './components/TodoInput'

import './global.css'

export function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      isFinished: false,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
    {
      id: '2',
      isFinished: true,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
    {
      id: '3',
      isFinished: false,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
  ])

  function handleCreateTodo(text: string) {
    setTodos([{ id: text, text: text, isFinished: false }, ...todos])
  }

  function handleDeleteTodo(id: string) {
    setTodos((todosState) => todosState.filter(state => state.id !== id))
  }

  function handleToggleTodo(id: string) {
    setTodos((todosState) => todosState.map((todo) => {
      if(todo.id !== id) return todo
      
      return {
        ...todo,
        isFinished: !todo.isFinished
      }
    }))
  }

  return (
    <>
      <Header />
      <main>
        <TodoInput onCreateTodo={handleCreateTodo} />
        <TodoBoard onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} todos={todos}/>
      </main>
    </>
  )
}

