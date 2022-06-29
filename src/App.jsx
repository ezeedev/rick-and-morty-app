
import CharacterList from './components/CharacterList';
import './index.css'

function App() {


  return (
    <div className='bg-slate-700 h-full'>
      <div className="container max-w-[1000px] m-auto">

      <h1 className='text-white text-2xl font-bold text-center py-6 uppercase'>Personajes de Rick & Morty</h1>
      <header className='my-10'>
      </header>

      <CharacterList />
      </div>
    </div>
  )
}

export default App;