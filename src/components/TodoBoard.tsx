import { Receipt } from 'phosphor-react'
import styles from './TodoBoard.module.css'
import { TodoCard } from './TodoCard'
import { useState } from 'react'

const todoList = [
  {
    id: 1,
    isFinished: false,
    text: '1Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    isFinished: true,
    text: '2Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 3,
    isFinished: false,
    text: '3Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
]

export function TodoBoard() {
  const [todos, setTodos] = useState(todoList)



  const hasTodo = todos.length > 0

  const todoFinished = todoList.filter((todo) => todo.isFinished).length

  const todoCount = todoList.length

  return (
    <div className={styles.container}>

      <div className={styles.boardHeader}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span className={styles.countLabel}>{todoCount}</span>
        </div>

        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span className={styles.countLabel}>{todoFinished}</span>
        </div>
      </div>

      {
        hasTodo ? todos.map((toDo) => <TodoCard key={toDo.id} toDo={toDo} />)
        : (
          <div className={styles.boardContentEmpty}>
            <Receipt size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )
      }

      
    </div>
  )
}