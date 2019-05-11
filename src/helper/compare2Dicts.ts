import _ from 'lodash';
import { Dict } from '../types';

export const compare2Dicts = (inputDic: Dict, correctDict: Dict): Dict => {
  const result: Dict = {};
  _.forEach(correctDict, (value: string, key: string) => {
    value.toLowerCase() === inputDic[key].toLowerCase()
      ? (result[key] = true)
      : (result[key] = false);
  });
  return result;
};
