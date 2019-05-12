import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../Grid';

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
});
