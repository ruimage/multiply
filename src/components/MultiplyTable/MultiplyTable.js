import React, {useState} from 'react';
import './MultiplyTable.css'
import * as PropTypes from "prop-types";

function RowDigit(props) {


  return (
    <div
      id={'id-' + props.row + '-' + props.col}
      className={props.isDigitSelected(props.col, props.row) ? props.classString + ' digit-item-selected' : props.classString}
      data-value={props.dataValue}
      onClick={props.onClick}
    >
        {props.dataValue}
    </div>);
}

RowDigit.propTypes = {dataValue: PropTypes.any};

function MultiplyTable() {

  const [clickedValues, setClickedValues] = useState([]);

  const toggleActiveDigits = (col, row) => {
    if (isDigitSelected(col, row)) return setClickedValues(clickedValues.filter(coord => coord !== `${col}${row}`));
    return setClickedValues((prev) => [`${col}${row}`, ...prev]);
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
