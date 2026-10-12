import { CirclePlusIcon } from 'lucide-react'
import logoImg from './assets/logo.png'
import { Button } from './components/button'
import { Input } from './components/input'

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className='h-50 bg-gray-700 flex justify-center items-center'>
        <img src={logoImg} alt="" />
      </header>
      <div className='w-full max-w-184 mx-auto -mt-6.5'>
        <form className='flex justify-center gap-2 '>
          <Input type='text' placeholder='Adicione uma nova tarefa' />
          <Button onClick={() => alert('ola')}>
            Criar
            <CirclePlusIcon />
          </Button>
        </form>
      </div>
    </div>
  )
}
