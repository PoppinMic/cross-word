import React,{useState} from 'react';

import { mockGridSource, mockListOfWords, mockCorrectAnswer } from "../../mockData";
import Grid from './Grid';
import WordList from './WordList';

const CrossWord = () => {
  const [errMsg, setErrMsg] = useState('');
  return (
    <React.Fragment>
      <Grid gridSource={mockGridSource} />
      <WordList listOfWord={mockListOfWords} />
    </React.Fragment>)
}

export default CrossWord;