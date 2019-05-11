import React, { useState } from 'react';

import { mockCorrectAnswer } from '../../mockData';
import { ERROR_MSG } from '../../constants/messages';
import {
  BlockWrapper,
  Block,
  Overlay,
  GridWrapper,
  ButtonsWrapper
} from './styles';
import { color_correct_green, color_wrong_red } from '../../styles/cssVars';
import { compare2Dicts } from '../../helper/compare2Dicts';

interface IGridSource {
  gridSource: Array<string>;
}

const Grid = ({ gridSource }: IGridSource) => {
  // strings from gridSource should be same length
  // otherwise show error msg
  const gridLineLength = gridSource[0].length;
  const [answer, setAnswer] = useState({});
  const [correctAnswerDict, setCorrectAnswerDict] = useState({});

  const renderBlocks = (rowString: string, rowIndex: number) => {
    const rowResult: Array<JSX.Element | null> = [];
    if (rowString.length !== gridLineLength) {
      console.error(ERROR_MSG.WRONG_FORMAT);
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
        console.error(ERROR_MSG.WRONG_FORMAT);
      }
    }
    return rowResult;
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let newAnswer = { ...answer };
    newAnswer[e.currentTarget.name] = e.currentTarget.value;
    setAnswer(newAnswer);
  };

  const validateAnswers = () => {
    if (Object.keys(answer).length === Object.keys(mockCorrectAnswer).length) {
      setCorrectAnswerDict(compare2Dicts(answer, mockCorrectAnswer));
    } else {
      console.error(ERROR_MSG.INCOMPLETE);
    }
  };

  const renderValidation = dictKey => {
    if (Object.keys(correctAnswerDict).length > 0) {
      return correctAnswerDict[dictKey] ? (
        <Overlay role="img" aria-label="correct" color={color_correct_green}>
          ✔
        </Overlay>
      ) : (
        <Overlay role="img" aria-label="wrong" color={color_wrong_red}>
          ✖
        </Overlay>
      );
    }
  };

  const showCorrectAnswers = () => {
    setAnswer(mockCorrectAnswer);
  };

  const resetGrid = () => {
    setAnswer({});
    setCorrectAnswerDict({});
  };

  return (
    <React.Fragment>
      <GridWrapper>
        {gridSource.map((row, index) => (
          <div key={row + index}>{renderBlocks(row, index)}</div>
        ))}
      </GridWrapper>
      <ButtonsWrapper>
        <button onClick={validateAnswers}>Validate</button>
        <button onClick={showCorrectAnswers}>Show Correct Answers</button>
        <button onClick={resetGrid}>Try Again</button>
      </ButtonsWrapper>
    </React.Fragment>
  );
};

export default Grid;
