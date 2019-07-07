import React from 'react';
import { shallow } from 'enzyme';
import Notifier from './Notifier'

describe('<Notifier />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Notifier />);
    expect(component).toHaveLength(1);
  });
});
