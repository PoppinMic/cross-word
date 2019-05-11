import React from 'react';

interface IListOfWords {
  listOfWord: Array<string>;
}
const WordList = ({ listOfWord }: IListOfWords) => {
  return (
    <ul>
      {listOfWord.map((word, index) => (
        <li key={word + '-' + index}>{word}</li>
      ))}
    </ul>
  );
};

export default WordList;
