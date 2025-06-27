import React, { useState } from 'react'

const DropDown = ({options, selection, onSelection}) => {
    const [isOpen, setIsOpen] =useState(false);
console.log("options1234556",options)
    const handleCick =()=>{
        setIsOpen(!isOpen);
    }

  const renderedItems = options.map((option, index) => (
  <div 
    key={index}
    onClick={() => {
      onSelection(option);
      setIsOpen(false);    
    }}
    className="cursor-pointer hover:bg-gray-100 p-2"
  >
    {option.title} {/* assuming your options have 'title', not 'label' */}
  </div>
));

console.log("isOpen",isOpen);
let content='select...';
if(selection){
  content=selection.label;
}

  return (
    <>
     <div>{content}</div>
    <div onClick={handleCick} > {selection.title|| 'Select....`'}
     {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border rounded shadow">
          {renderedItems}{console.log("renderedItems",renderedItems)}
        </div>
      )}
    </div>
  </>
  )
}

export default DropDown