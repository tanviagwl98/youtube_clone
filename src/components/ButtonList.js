import React from 'react'
import Button from "./Button";

const ButtonList = () => {
    const btnArray = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"]
  return (
    <div className="flex">{btnArray.map((name, index)=> {
        return(
            <Button name={name} key={index}/>     
        )
    })}</div>
  )
}

export default ButtonList