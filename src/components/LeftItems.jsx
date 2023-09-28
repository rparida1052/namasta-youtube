import React from 'react'
import Items from './Items'
import { Link } from 'react-router-dom'

const LeftItems = () => {
  return (
    <div>
         <ul className="border-b-2 border-gray-300 mx-4 pb-2 mt-7 ">
        <Link to="/"><Items name={"Home"}/></Link>
        <Items name= {"shorts"}/>
        <Items name={"Subscription"} />
      </ul>
    </div>
  )
}

export default LeftItems