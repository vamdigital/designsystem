import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('<Card />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Card />);
  });
  it('should render Card Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
