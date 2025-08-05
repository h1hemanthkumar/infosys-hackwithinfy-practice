import React from 'react'

const Content = () => {
    
    const handlenamechange=()=>{
        const names=['Hemanth','Harshitha','Prashanth','Karthik'];
        const value=Math.floor(Math.random()*3);
        return names[value];
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
        <p onDoubleClick={()=>handleclick2(`${handlenamechange()}`)}> Hello {handlenamechange()} </p>
        <button onClick={handleclick}>Click me</button>
        <button onClick={()=>handleclick2("Hemanth Kumar")}>Click hemanth</button>
        <button onClick={(e)=>handleclick3(e)}>Click event</button>
    </main>
  )
}

export default Content
