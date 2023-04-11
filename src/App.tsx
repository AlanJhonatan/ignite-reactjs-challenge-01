import { Header } from './components/Header'
import { TodoBoard } from './components/TodoBoard'
import { TodoInput } from './components/TodoInput'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <main>
        <TodoInput />
        <TodoBoard />
      </main>
    </>
  )
}

