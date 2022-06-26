import React, {useState} from 'react';
import './MultiplyTable.css'
import * as PropTypes from "prop-types";

function RowDigit(props) {

  return (
    <div id={'id-'+props.row+'-'+props.col} className={props.classString} data-value={props.dataValue} >
      {props.dataValue}
    </div>);
}

RowDigit.propTypes = {dataValue: PropTypes.any};

function MultiplyTable({valueArray}) {

  return (
    <div className="mult">

      {valueArray.map((v1, i1) => {
        return (
          <div className="main-row" data-row={i1 + 1}>
            <div className="digit-item-number">{i1 + 1}</div>
            {v1.map((v2) => <RowDigit  dataValue={v2} classString='digit-item' col={v2} row={i1 + 1}/>)}
          </div>)
      })
      }


    </div>
  );
}

export default MultiplyTable;
