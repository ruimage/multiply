import React from 'react';
import './MultiplyTable.css'

function MultiplyTable({valueArray}) {
  return (
    <div className="mult">
      <div className="main-column">
        {valueArray.map(valueArray => <div className="NumberLine">{valueArray}</div>)}
      </div>
    </div>
  );
}

export default MultiplyTable;
