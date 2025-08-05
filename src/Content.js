import React from 'react'

const Content = () => {
    
    const handlenamechange=()=>{
        const names=['Hemanth','Harshitha','Prashanth','Karthik'];
        const value=Math.floor(Math.random()*3);
        return names[value];
    }

    return (
    <main>
        <p> Hello {handlenamechange()} </p>
    </main>
  )
}

export default Content
