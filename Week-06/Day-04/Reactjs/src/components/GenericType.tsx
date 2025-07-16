import React, { useState } from "react";


const GenericType = () => {
      const [colors, setColors]= useState<string>([]);

    const handleClick=()=>{
        setColors([...colors,'red'])
    }
  return (
    <>
    <div>GenericType</div>
    <div>
    <button onClick={handleClick}>Click</button>
    </div>
 <div>
       <h1>
        {colors}
    </h1>
 </div>
    </>
    
  )
}

export default GenericType;