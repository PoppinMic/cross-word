import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../Grid';
import { Block, Overlay } from '../styles';

Enzyme.configure({ adapter: new Adapter() });

const mockGridData = ['++-++', '+-+++', '---++', '-+++-', '--++-'];

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Grid gridSource={mockGridData} />);
});

describe(`<Grid /> rendering`, () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have 25 input elements', () => {
    expect(wrapper.find(Block)).toHaveLength(25);
  });
  it('should have 10 available input elements', () => {
    expect(wrapper.find("[data-testid='availableInput']")).toHaveLength(10);
  });
  it('should have 15 disabled input elements', () => {
    expect(wrapper.find("[data-testid='disabledInput']")).toHaveLength(15);
  });
  it('should not have any Overlay', () => {
    expect(wrapper.find(Overlay)).toHaveLength(0);
  });
});
