import { CheckCircle, Circle, Icon, Trash } from 'phosphor-react'
import styles from './TodoCard.module.css'
import { useState } from 'react'


export interface Todo {
  isFinished: boolean
  text: string
}

interface TodoProps {
  toDo: Todo
}

export function TodoCard({ toDo }: TodoProps) {
  const [mouseHover, setMouseHover] = useState(false)

  return (
    <div className={styles.container}>
      {
        toDo.isFinished ?
          <>
            <span
              className={styles.checkedCircle}
              onMouseOver={() => setMouseHover(true)}
              onMouseOut={() => setMouseHover(false)}
            >
              <CheckCircle size={24} weight='fill' />
            </span>
            <p className={styles.textChecked}>{toDo.text}</p>
          </>
        : 
          <>
            <Circle 
              size={24} 
              weight={mouseHover ? 'duotone' : 'bold'}
              onMouseOver={() => setMouseHover(true)}
              onMouseOut={() => setMouseHover(false)}
              className={styles.circle}
            />
            <p>{toDo.text}</p>
          </>
      }

      
      <div className={styles.buttonDelete}>
        <Trash size={20} />
      </div>
    </div>
  )
}