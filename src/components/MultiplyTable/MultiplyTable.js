import React, {useState} from 'react';
import './MultiplyTable.css'
import RowDigit from "../RowDigit/RowDigit";


function MultiplyTable() {

  const [clickedValues, setClickedValues] = useState([]);
  const [sumOfValues, setSumOfValues] = useState(0);

  const toggleActiveDigits = (col, row) => {
    if (isDigitSelected(col, row)) {
      let newSetValues = [...clickedValues];
      for (let i = 1; i <= col; i++) {
        newSetValues = newSetValues.filter(coord => coord !== `${i}${row}`)
      }
      setSumOfValues(prevState => prevState - col);
      return setClickedValues(newSetValues)
    }


    const newActivatedValues = [];
    for (let i = 1; i <= col; i++) {
      newActivatedValues.push(`${i}${row}`)
    }
    setSumOfValues(prevState => prevState + col);
    return setClickedValues((prev) => [...newActivatedValues, ...prev]);
  };

  const isDigitSelected = (col, row) => clickedValues.indexOf(`${col}${row}`) !== -1

  const valueArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ];


  return (
    <div className="mult">
      <div className="current-result">{sumOfValues}</div>
      {valueArray.map((v1, i1) => {
        return (
          <div className="main-row" data-row={i1 + 1}>
            <div className="digit-item-number">{i1 + 1}</div>
            {v1.map((v2) => <RowDigit
              onClick={() => toggleActiveDigits(v2, i1 + 1)}
              classString='digit-item '
              dataValue={v2}
              col={v2}
              row={i1 + 1}
              isDigitSelected={isDigitSelected}

            />)}
          </div>)
      })
      }


    </div>
  );
}

export default MultiplyTable;
