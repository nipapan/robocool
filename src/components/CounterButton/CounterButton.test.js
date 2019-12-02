import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from "./CounterButton";

it('renders Counter Button', () => {
   expect(shallow(<CounterButton />)).toMatchSnapshot();
})

it('increases Counter correctly', () => {
   const wrapper = shallow(<CounterButton />);

   wrapper.find('[id="counter"]').simulate('click');
   wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.state()).toEqual({counter:3});
})