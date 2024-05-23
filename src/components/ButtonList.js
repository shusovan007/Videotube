import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="News"/>
        <Button name="Games"/>
        <Button name="Cooking"/>
        <Button name="Live"/>
        <Button name="All"/>
        
    </div>
  )
}

export default ButtonList