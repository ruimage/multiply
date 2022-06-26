import React from 'react';
import './MultiplyTable.css'

function MultiplyTable({valueArray}) {
  return (
    <div className="mult">

      {valueArray.map((v1) => {
          return (
            <div className="main-row">
              {v1.map((v2) => <div className="digit-item ">{v2}</div>)}
            </div>)
        })
      }


    </div>
  );
}

export default MultiplyTable;
