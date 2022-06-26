import './App.css';
import {useEffect, useState} from "react";
import MultiplyTable from "../MultiplyTable/MultiplyTable";


function App() {

  const [factor1, setFactor1] = useState(0);
  const [factor2, setFactor2] = useState(0);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);



  useEffect(() => {
    setFactor1(Math.floor(Math.random() * 10)+1);
    setFactor2(Math.floor(Math.random() * 10)+1);
  },[]);

  useEffect(() => {
    setResult(factor1 * factor2)
  }, [factor1, factor2])


  return (
    <div className="App">
      <header className="App-body">
        <div className="App-factors-output">
          <p>{factor1} X {factor2}</p>
        </div>
        <div className="App-factors-output">
          <input type="text" className={isCorrect ? "App-factor":"App-factor-correct"} value={result}/>
        </div>

        <MultiplyTable answer={answer} isCorrect={false}/>

      </header>
    </div>
  );
}

export default App;
