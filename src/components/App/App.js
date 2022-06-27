import './App.css';
import {useEffect, useState} from "react";
import MultiplyTable from "../MultiplyTable/MultiplyTable";


function App() {

  const [factor1, setFactor1] = useState(0);
  const [factor2, setFactor2] = useState(0);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);




  useEffect(() => {
    setFactor1(Math.floor(Math.random() * 10)+1);
    setFactor2(Math.floor(Math.random() * 10)+1);
  },[]);

  useEffect(() => {
    setResult(factor1 * factor2)
  }, [factor1, factor2])

  useEffect(() => {
    setAnswer(result)
  }, [result])


  return (
    <div className="App">
      <header className="App-body">
        <div className="App-factors-output">
          {factor1} X {factor2}
        </div>
        <MultiplyTable answer={answer}/>

      </header>
    </div>
  );
}

export default App;
