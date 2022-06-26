import React from 'react';

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

export default RowDigit;
