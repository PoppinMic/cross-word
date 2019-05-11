import React, { useState } from 'react';

import { ERROR_MSG } from '../../constants/messages';

interface IGridSource {
  gridSource: Array<string>;
}

const Grid = ({ gridSource }: IGridSource) => {
  const [errMsg, setErrMsg] = useState('');

  // strings from gridSource should be same length
  // otherwise show error msg
  const gridLineLength = gridSource[0].length;
  return <div>{ERROR_MSG.WRONG_FORMAT}</div>;
  // gridSource.map(line => {
  //   if (line.length !== gridLineLength) {
  //     setErrMsg(ERROR_MSG.WRONG_FORMAT);
  //     return;
  //   }
  //   for (let i = 0; i < gridLineLength; i++) {
  //     if(line[i] === '+'){
  //       return (<div>sdf</div>)
  //     }
  //   }
  // })
};

export default Grid;
