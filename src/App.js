import './App.css';
import { useState } from 'react';
import { generateInputMap, solve } from './functions';
import DisplayArray from './DisplayArray';

/* 🅾️ ❌ ❄️ 🌲 */

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [solvedArray, setSolvedArray] = useState([]);
  const [treesHit, setTreesHit] = useState(0);

  function generateMap() {
    var newMap = generateInputMap(10, 50);
    setTreesHit(0);
    setInputArray([...newMap]);
    setSolvedArray([]);
  }

  function solveMap() {
    if (!solvedArray.length) {
      const [newMap, numTrees] = solve(inputArray);
      setSolvedArray([...newMap]);
      setTreesHit(numTrees);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toboggan Safety</h1>
        <DisplayArray array={inputArray} />
        <div>
          <button onClick={generateMap}>Generate</button>
          <button onClick={solveMap}>Solve</button>
        </div>
        {treesHit > 0 ? 
        <p>Trees hit{':'} {treesHit}</p>
        : null }
      </header>
    </div>
  );
}

export default App;
