import { Receipt } from 'phosphor-react'
import styles from './TodoBoard.module.css'
import { TodoCard } from './TodoCard'

interface Todo {
  id: string
  text: string
  isFinished: boolean
}

interface TodoBoardProps {
  todos: Todo[]
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
}

export function TodoBoard({ todos, onDeleteTodo, onToggleTodo }: TodoBoardProps) {
  const hasTodo = todos.length > 0

  const todoFinished = todos.filter((todo) => todo.isFinished).length

  const todoCount = todos.length

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
        hasTodo ? todos.map((toDo) => <TodoCard key={toDo.id} toDo={toDo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)
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