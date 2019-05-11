import React, { useState } from 'react';
import _ from 'lodash';

import { ANSWER_TYPE } from '../../constants/common';
import { BlockWrapper, Block, Overlay } from '../../styles/common';
import { color_correct_green, color_wrong_red } from '../../styles/cssVars';

interface IGridSource {
  gridSource: Array<string>;
  correctAnswers: object;
}

const Grid = ({ gridSource, correctAnswers }: IGridSource) => {
  // strings from gridSource should be same length
  // otherwise show error msg
  const gridLineLength = gridSource[0].length;
  const [answer, setAnswer] = useState({});
  const [correctAnswerDict, setCorrectAnswerDict] = useState({});

  const renderBlocks = (rowString: string, rowIndex: number) => {
    const rowResult: Array<JSX.Element | null> = [];
    if (rowString.length !== gridLineLength) {
      return;
    }
    for (let columnIndex = 0; columnIndex < gridLineLength; columnIndex++) {
      if (rowString[columnIndex] === '+') {
        rowResult.push(<Block key={rowIndex + columnIndex} disabled />);
      } else if (rowString[columnIndex] === '-') {
        rowResult.push(
          <BlockWrapper key={rowIndex + columnIndex}>
            <Block
              type="text"
              name={`x${rowIndex}x${columnIndex}`}
              maxLength={1}
              onChange={handleInputChange}
              value={answer[`x${rowIndex}x${columnIndex}`] || ''}
            />
            {renderValidation(`x${rowIndex}x${columnIndex}`)}
          </BlockWrapper>
        );
      } else {
        throw Error('wrong format');
      }
    }
    return rowResult;
  };

  const handleInputChange = e => {
    let newAnswer = { ...answer };
    newAnswer[e.currentTarget.name] = e.currentTarget.value;
    setAnswer(newAnswer);
  };

  const validateAnswers = () => {
    if (Object.keys(answer).length === Object.keys(correctAnswers).length) {
      const answerCorrectness = {};
      _.forEach(correctAnswers, (value, key) => {
        value === answer[key]
          ? (answerCorrectness[key] = true)
          : (answerCorrectness[key] = false);
      });
      setCorrectAnswerDict(answerCorrectness);
    } else {
      console.warn('please complete all inputs');
    }
  };

  const renderValidation = dictKey => {
    if (_.size(correctAnswerDict) > 0) {
      return correctAnswerDict[dictKey] ? (
        <Overlay color={color_correct_green}>✔</Overlay>
      ) : (
        <Overlay color={color_wrong_red}>❌</Overlay>
      );
    }
  };
  const showCorrectAnswers = () => {
    setAnswer(correctAnswers);
  };

  const resetGrid = () => {
    setAnswer({});
    setCorrectAnswerDict({});
  };

  return (
    <React.Fragment>
      <div>
        {gridSource.map((row, index) => (
          <div key={row + index}>{renderBlocks(row, index)}</div>
        ))}
      </div>
      <button onClick={validateAnswers}>Validate</button>
      <button onClick={showCorrectAnswers}>Show Correct Answers</button>
      <button onClick={resetGrid}>Try Again</button>
    </React.Fragment>
  );
};

export default Grid;
