import React, { useState } from 'react';
import Button from '../../Day-09/Button';



export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search photos..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button label="Search" type="submit" />
      {/* <button type="submit">Search</button> */}
    </form>
  );
}
