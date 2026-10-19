import { CirclePlusIcon } from 'lucide-react'
import logoImg from './assets/logo.png'
import { Button } from './components/button'
import { Input } from './components/input'
import { Checkbox } from './components/checkbox'
import { Badge } from './components/badge'
import { TaskItem } from './components/task-item'

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className='h-50 bg-gray-700 flex justify-center items-center'>
        <img src={logoImg} alt="" />
      </header>
      <div className='w-full max-w-184 mx-auto -mt-6.5'>
        <form className='flex justify-center gap-2 '>
          <Input type='text' placeholder='Adicione uma nova tarefa' autoFocus />
          <Button onClick={() => alert('ola')}>
            Criar
            <CirclePlusIcon />
          </Button>
        </form>
        <div className='flex justify-between items-center mt-16'>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-bold text-blue'>Tarefas criadas</span>
            <Badge>
              5
            </Badge>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-bold text-purple'>Concluídas</span>
            <Badge>
              2 de 5
            </Badge>
          </div>

        </div>
        <div className='mt-6'>
          <TaskItem />
        </div>
      </div>
    </div>
  )
}
