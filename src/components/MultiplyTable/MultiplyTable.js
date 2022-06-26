import React from 'react';
import './MultiplyTable.css'

function MultiplyTable({valueArray}) {
  return (
    <div className="mult">

      {valueArray.map((v1,i1) => {
          return (
            <div className="main-row" data-row={i1 + 1}>
              <div className="digit-item-number">{i1 + 1}</div>
              {v1.map((v2) => <div className="digit-item" data-value={v2}>{v2}</div>)}
            </div>)
        })
      }


    </div>
  );
}

export default MultiplyTable;
