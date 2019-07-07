import React from 'react';
import { shallow } from 'enzyme';
import JsonSchemaConverter from './JsonSchemaConverter'

describe('<JsonSchemaConverter />', () => {
  it('renders without crashing', () => {
    const component = shallow(<JsonSchemaConverter />);
    expect(component).toHaveLength(1);
  });
});
