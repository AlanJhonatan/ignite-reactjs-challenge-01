import { PlusCircle } from 'phosphor-react'
import styles from './TodoInput.module.css'
import { MouseEvent, useState } from 'react'

interface TodoInputProps {
  onCreateTodo: (text: string) => void
}

export function TodoInput({ onCreateTodo }: TodoInputProps) {
  const [inputText, setInputText] = useState('')

  function handleCreateTodo(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    
    onCreateTodo(inputText)
    setInputText('')
  }
  
  return (
    <form className={styles.todoForm}>
      <input 
        className={styles.todoInput}
        placeholder='Adicione uma nova tarefa'
        type="text" value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className={styles.buttonCreate} type="submit" onClick={handleCreateTodo}>Criar <PlusCircle weight='bold' size={16} /></button>
    </form>
  )
}