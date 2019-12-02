import {shallow} from 'enzyme';
import React from 'react';
import CardList from "./CardList";

const mockRobots = [
   {
      id: 1,
      name: 'Palo',
      email: 'palow@gmail.com'
   },
   {
      id: 2,
      name: 'Tom',
      email: 'tom@gmail.com'
   }
]

it('renders CardList', () => {
   expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})