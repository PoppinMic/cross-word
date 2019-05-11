import { compare2Dicts } from './compare2Dicts';

const mockInput = {
  a: "a",
  b: "b",
  c: "c",
  d: 'd'
}

const mockCorrectInput = {
  b: "b",
  c: "c",
  d: "e",
  l: "l"
}

const expectResult = {
  b: true,
  c: true,
  d: false,
  l: false
}

test('should meet expect Resutls', () => {
  expect(compare2Dicts(mockInput, mockCorrectInput)).toMatchObject(expectResult);
})