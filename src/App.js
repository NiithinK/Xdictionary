import React, { useState } from 'react';
import './App.css';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result-container">
        <p style={{fontWeight:'bolder'}}>Definition: </p>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default App;
