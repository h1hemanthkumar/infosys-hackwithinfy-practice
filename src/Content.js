import React from 'react'
import { useState } from 'react';
const Content = () => {
    
    const [Name,setName]=useState('Hemanth');
    const [Count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(Count+1);
        setCount(Count+1);
        setCount(Count+1);
        console.log(Count);
    }

    const handlenamechange=()=>{
        const names=['Hemanth','Harshitha','Prashanth','Karthik'];
        const value=Math.floor(Math.random()*3);
        setName(names[value]);
    }

    const handleclick=()=>{
        console.log("You clicked it");
    }
    const handleclick2=(name)=>{
        console.log(`${name} your name is clicked`);
    }

    const handleclick3=(event)=>{
        console.log(event.target);
    }

    return (
    <main>
        <p onDoubleClick={()=>handleclick2(`${handlenamechange()}`)}>
            Hello {Name} 
        </p>
        <p>
            My nuumber is {Count}
        </p>
        <button onClick={handlenamechange}>Click me</button>
        <button onClick={handleIncrement}>Click me</button>
        <button onClick={()=>handleclick2("Hemanth Kumar")}>Click hemanth</button>
        <button onClick={(e)=>handleclick3(e)}>Click event</button>
    </main>
  )
}

export default Content
