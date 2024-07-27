import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/Index'

function Navbar() {
  const {query,setQuery,handleSubmit} = useContext(GlobalContext)
  console.log(query);
  return (
    <nav className='flex justify-between bg-slate-600 text-white h-8 mb-4'>
      <NavLink to={'/'}><h1>Recipe Finder</h1></NavLink>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input 
        className='text-black p-1 box-border'
        type='text' 
        placeholder='Enter items...'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      
      <NavLink to={'/'}><h1>Home</h1></NavLink>
      <NavLink to={'/favorite'}><h1>Favorite</h1></NavLink>
    </nav>
  )
}

export default Navbar