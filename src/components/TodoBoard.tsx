import { Receipt } from 'phosphor-react'
import styles from './TodoBoard.module.css'
import { Todo } from './Todo'

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

  const hasTodo = todoList.length > 0

  return (
    <div className={styles.container}>

      <div className={styles.boardHeader}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span className={styles.countLabel}>0</span>
        </div>

        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span className={styles.countLabel}>0</span>
        </div>
      </div>

      {
        hasTodo ? todoList.map((toDo) => <Todo key={toDo.id} toDo={toDo} />)
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