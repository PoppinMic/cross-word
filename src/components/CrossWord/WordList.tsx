import React from 'react';

import { WordListWrapper } from './styles';
interface IListOfWords {
  listOfWord: Array<string>;
}

const WordList = ({ listOfWord }: IListOfWords) => {
  return (
    <WordListWrapper>
      <p>Words to use</p>
      {listOfWord.map((word, index) => (
        <li key={word + '-' + index}>{word}</li>
      ))}
    </WordListWrapper>
  );
};

export default WordList;
