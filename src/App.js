import './App.css';
import {useEffect, useState} from "react";


function App() {

  const [factor1,setFactor1] = useState(0);
  const [factor2,setFactor2] = useState(0);
  const [result,setResult] = useState(0)
  const [multiplyTable,setMultiplyTable] = useState([]);

  useEffect(()=>{
    setFactor1(Math.floor(Math.random()*10));
    setFactor2(Math.floor(Math.random()*10));
    setMultiplyTable(()=>{
      const masterArray = new Array(10);
      masterArray.map(value => new Array(10));
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


      </header>
    </div>
  );
}

export default App;
