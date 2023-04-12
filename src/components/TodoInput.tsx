import { PlusCircle } from 'phosphor-react'
import styles from './TodoInput.module.css'

export function TodoInput() {
  return (
    <form className={styles.todoForm}>
      <input className={styles.todoInput} placeholder='Adicione uma nova tarefa' type="text" />
      <button className={styles.buttonCreate} type="submit">Criar <PlusCircle weight='bold' size={16} /></button>
    </form>
  )
}