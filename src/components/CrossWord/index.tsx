import React from 'react';

import { mockGridSource, mockListOfWords } from '../../mockData';
import Grid from './Grid';
import WordList from './WordList';

const CrossWord = () => (
  <React.Fragment>
    <Grid gridSource={mockGridSource} />
    <WordList listOfWord={mockListOfWords} />
  </React.Fragment>
);

export default CrossWord;
