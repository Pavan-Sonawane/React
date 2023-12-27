import React from 'react'

export const AddiitonCompo = () => {
    const a=parseInt(prompt("Enter  the First Number"));
    const b=parseInt(prompt("Enter  the second number"));
    
  return (
    <div>
        
        <h1>The Addition of {a} and {b} is {a+b}</h1>
    </div>
  )
}
