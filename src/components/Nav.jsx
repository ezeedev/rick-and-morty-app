const Nav = ( {page, setPage} ) => {
  return (
    <nav className='flex justify-between items-center px-6 pb-10'>
      <p className="text-xl text-white">Pagina: {page}</p>
      <button 
      className='bg-lime-400 text-xl p-1 hover:bg-lime-500 transition-colors duration-300'
      
      onClick={() => setPage(page + 1)}
      >
        Siguiente pagina: {page + 1}
      </button>
  </nav>
  )
}

export default Nav;