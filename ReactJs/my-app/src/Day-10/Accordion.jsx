import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { GoChevronDown,GoChevronLeft } from 'react-icons/go';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium"
    >
      {title}
    </button>
    {isOpen && (
      <div className="px-4 py-2 bg-white text-gray-700">
        {content}
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  
    const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const data = [
    { title: "Section 1", content: "How can i get my refund" },
    { title: "Section 2", content: "Payment Mode" },
    { title: "Section 3", content: "Installment" },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

     const renderedItems = data.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="max-w-md mx-auto mt-10 border rounded shadow-md">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleIndex(index)}
        />
      ))}
      {renderedItems}
     <h1>Cheers! <FaBeer /></h1>
     <h1><GoChevronLeft/></h1>
    <h1><GoChevronDown/></h1> 
    </div>
  );
};

export default Accordion;
