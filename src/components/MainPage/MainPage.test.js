import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
   const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchText: '',
      isPending: false
   }
   wrapper = shallow(<MainPage {...mockProps}/>);
})

it('renders Mainpage without crashing', () => {
   expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly (with keyword that match)', () => {
   const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Palo Tom',
         email: 'palotom@gmail.com'
      }],
      searchText: 't',
      isPending: false
   }
   const wrapper2 = shallow(<MainPage {...mockProps2}/>);
   expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
})

it('filters robots correctly (with keyword that does not match)', () => {
   const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Palo Tom',
         email: 'palotom@gmail.com'
      }],
      searchText: 'aom',
      isPending: false
   }
   const expectedResults = [];
   const wrapper3 = shallow(<MainPage {...mockProps3}/>);
   expect(wrapper3.instance().filterRobots()).toEqual(expectedResults);
})

it('renders MainPage correctly when isPending is true', () => {
   const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Palo Tom',
         email: 'palotom@gmail.com'
      }],
      searchText: '',
      isPending: true
   }
   const wrapper4 = shallow(<MainPage {...mockProps4}/>);
   expect(wrapper4).toMatchSnapshot();
})
