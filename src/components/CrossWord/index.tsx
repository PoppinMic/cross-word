import React from 'react';

import {
  mockGridSource,
  mockListOfWords,
  mockCorrectAnswer
} from '../../mockData';
import Grid from './Grid';
import WordList from './WordList';

const CrossWord = () => (
  <React.Fragment>
    <Grid gridSource={mockGridSource} correctAnswers={mockCorrectAnswer} />
    <WordList listOfWord={mockListOfWords} />
  </React.Fragment>
);

export default CrossWord;
