import { Trash } from 'phosphor-react'
import styles from './Todo.module.css'


export interface Todo {
  isFinished: boolean
  text: string
}

interface TodoProps {
  toDo: Todo
}

export function Todo({ toDo }: TodoProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="todo-check" id="todo-check" />
      <p>{toDo.text}</p>
      <Trash size={24} />
    </div>
  )
}