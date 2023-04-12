import { CheckCircle, Circle, Icon, Trash } from 'phosphor-react'
import styles from './TodoCard.module.css'
import { useState } from 'react'

export interface Todo {
  id: string
  isFinished: boolean
  text: string
}

interface TodoProps {
  toDo: Todo
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
}

export function TodoCard({ toDo, onDeleteTodo, onToggleTodo }: TodoProps) {
  const [mouseHover, setMouseHover] = useState(false)

  function handleDeleteTodo() {
    onDeleteTodo(toDo.id)
  }

  function handleToggleTodo() {
    onToggleTodo(toDo.id)
  }

  return (
    <div className={styles.container}>
      {
        toDo.isFinished ?
          <>
            <span
              className={styles.checkedCircle}
              onMouseOver={() => setMouseHover(true)}
              onMouseOut={() => setMouseHover(false)}
              onClick={handleToggleTodo}
            >
              <CheckCircle size={24} weight='fill' />
            </span>
            <div className={styles.textContainer}>
              <p className={styles.textChecked}>{toDo.text}</p>
            </div>
          </>
        : 
          <>
            <Circle 
              size={24} 
              weight={mouseHover ? 'duotone' : 'bold'}
              onMouseOver={() => setMouseHover(true)}
              onMouseOut={() => setMouseHover(false)}
              className={styles.circle}
              onClick={handleToggleTodo}
            />
            <div className={styles.textContainer}>
              <p>{toDo.text}</p>
            </div>
          </>
      }

      
      <div className={styles.buttonDelete} onClick={handleDeleteTodo}>
        <Trash size={20} />
      </div>
    </div>
  )
}