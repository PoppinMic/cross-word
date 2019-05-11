import _ from 'lodash';
import { Dict, ComparedDict } from '../types';

export const compare2Dicts = (inputDict: Dict, correctDict: Dict): ComparedDict => {
  const result: ComparedDict = {};
  _.forEach(correctDict, (value: string, key: string) => {
    if (inputDict[key]) {
      value.toLowerCase() === inputDict[key].toLowerCase()
        ? (result[key] = true)
        : (result[key] = false);
    } else {
      result[key] = false;
    }
  });
  return result;
};
