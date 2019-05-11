import _ from 'lodash';

export const compare2Dicts = (
  inputDic: object,
  correctDict: object
): object => {
  const result = {};
  _.forEach(correctDict, (value, key) => {
    value === inputDic[key] ? (result[key] = true) : (result[key] = false);
  });
  return result;
};
