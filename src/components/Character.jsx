function Character( {character} ) {
  return (
    <div className="pb-16">

        <div className="mb-6 text-center">
          <h2 className='text-white font-bold uppercase'>{character.name}</h2>
          <p className="text-white uppercase">{character.origin.name}</p>
        </div>

        <div className="flex justify-center">
          <img src={character.image} alt={character.name} className='rounded-full w-[150px]'/>
        </div>
  </div>
  )
}

export default Character