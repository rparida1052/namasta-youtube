import React from 'react'
import Items from './Items'

const LeftItems = () => {
  return (
    <div>
         <ul className="border-b-2 border-gray-300 mx-4 pb-2 mt-7 ">
        <Items name={"Home"}/>
        <Items name= {"shorts"}/>
        <Items name={"Subscription"} />
      </ul>
    </div>
  )
}

export default LeftItems