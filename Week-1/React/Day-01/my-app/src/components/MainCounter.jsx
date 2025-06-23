import React, { useState } from 'react'

const MainCounter = () => {
    const [count, setCount] = useState(0);

    const incHandle=()=>{ 
        setCount(count+1);
    }

  return (
          <>
           <div>{count}</div>
            <button onClick={incHandle}>Increment</button>
         </>
   
  )
}

export default MainCounter


