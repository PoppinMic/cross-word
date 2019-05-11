import React, { useState } from 'react';
import { Block } from '../../styles/common';

interface IGridSource {
  gridSource: Array<string>;
}

const Grid = ({ gridSource }: IGridSource) => {
  // strings from gridSource should be same length
  // otherwise show error msg
  const gridLineLength = gridSource[0].length;

  const [answer, setAnswer] = useState({});

  const handleInputChange = (rowIndex: number, columnIndex: number) => e => {
    let newAnswer = { ...answer };
    newAnswer[`x${rowIndex}x${columnIndex}`] = e.currentTarget.value;
    setAnswer(newAnswer);
  };

  const renderEmptyBlock = (rowString: string, rowIndex: number) => {
    const rowResult: Array<JSX.Element | null> = [];
    if (rowString.length !== gridLineLength) {
      return;
    }
    for (let columnIndex = 0; columnIndex < gridLineLength; columnIndex++) {
      if (rowString[columnIndex] === '+') {
        rowResult.push(<Block key={rowIndex + columnIndex} disabled />);
      } else if (rowString[columnIndex] === '-') {
        rowResult.push(
          <Block
            key={rowIndex + columnIndex}
            type="text"
            name={`x${rowIndex}x${columnIndex}`}
            maxLength={1}
            onChange={handleInputChange(rowIndex, columnIndex)}
            value={answer[`x${rowIndex}x${columnIndex}`] || ''}
          />
        );
      } else {
        throw Error('wrong format');
      }
    }
    return rowResult;
  };
  const validateAnswer = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form>
        {gridSource.map((row, index) => (
          <div key={row + index}>{renderEmptyBlock(row, index)}</div>
        ))}
        <input type="submit" value="validate" />
      </form>
    </React.Fragment>
  );
};

export default Grid;
