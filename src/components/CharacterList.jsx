import { useEffect, useState } from 'react'; 
import Character from './Character';
import Nav from './Nav';


function CharacterList() {
  
  const [characters, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getDates() {  
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setCharacter(data.results)
      setLoading(false)
    }
    getDates()
  }, [page])

  return (
    
    <div className=''>
      <Nav 
        page = {page}
        setPage = {setPage}
      />
      <div className="grid grid-cols-2 place-items-center gap-10">
        
      {

        loading ?  (
          <div className="flex justify-center items-center pb-10">
            <h2 className='text-white border border-white p-1 rounded-lg inline uppercase'>Cargando...</h2>
          </div>
        ) 
          :
       characters.map(character => {
        return (
          
          <div key={character.id}>
            <Character 
              character = {character}
            />
         </div>
         
        )
       })

      }
    </div>
    <Nav 
        page = {page}
        setPage = {setPage}
      />
    </div>
  )
}

export default CharacterList;