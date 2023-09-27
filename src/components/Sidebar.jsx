import React from 'react'
import LeftItems from './LeftItems'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector(state =>state.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //This is called early returning;
  return (
    <div className='col-span-1 shadow-sm '>
      <div>
       <LeftItems/>
       <LeftItems />
      </div>
    </div>
  )
}

export default Sidebar