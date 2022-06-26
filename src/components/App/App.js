import './App.css';
import {useEffect, useState} from "react";
import MultiplyTable from "../MultiplyTable/MultiplyTable";


function App() {

  const [factor1,setFactor1] = useState(0);
  const [factor2,setFactor2] = useState(0);
  const [result,setResult] = useState(0)
  const [multiplyTable,setMultiplyTable] = useState([]);

  useEffect(()=>{
    setFactor1(Math.floor(Math.random()*10));
    setFactor2(Math.floor(Math.random()*10));
    setMultiplyTable(()=>{
      const masterArray = Array.from({length: 10}, (_, i) => i + 1);
      //masterArray.map(value => Array.from({length: 10}, (_, i) => i + 1));
      return masterArray;
    })
  },[])

  useEffect(()=>{
    setResult(factor1*factor2)
  },[factor1, factor2])




  return (
    <div className="App">
      <header className="App-body">

        <div className="App-factors-output">
          <input type="text" className="App-factor" value={factor1}/>
          <input type="text" className="App-factor" value={factor2}/>
        </div>

        <div className="App-factors-output">
          <input type="text" className="App-factor" value={result}/>
        </div>

        <MultiplyTable valueArray={multiplyTable}/>

      </header>
    </div>
  );
}

export default App;