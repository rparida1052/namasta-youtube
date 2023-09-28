import React from 'react'
import Button from './Button'



const ButtonList = () => {

  const buttonList = ["All","Music","Sports","Computer","DSA","WEB","Cooking"]
  return (
    <div className='flex'>
      {buttonList.map((button,index) =>{
        return <Button name={button} key={index}/>
      })}
    </div>
  )
}

export default ButtonList