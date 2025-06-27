import { useState, useEffect } from 'react'

const Effects = () => {
    const [count, setCount] = useState(0);
        const [countTwo, setCountTwo] = useState(0);

     useEffect(()=>{
    console.log("Hello UseEffect")
  })

    useEffect(()=>{
    console.log("Hello Add Empty Dependency ");
  },[])

  useEffect(()=>{
    console.log("Count One");
  },[count]);

  useEffect(()=>{
    console.log("Count Two ");
  },[countTwo]);


  useEffect(()=>{
    console.log("Count one and Two ");
  },[countTwo, count]);

const handleClicked=()=>{
  setCount(count+1);
}


const handleClickedTwo=()=>{
  setCountTwo(countTwo+1);
}
  return (
    <div>Effects
            <button onClick={handleClicked}>Count one</button>
             <button onClick={handleClickedTwo}>Count Two</button>
    </div>
  )
}

export default Effects