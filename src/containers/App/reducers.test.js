import {
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_SUCCESS,
   REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('requestRobots', () => {
   const initialStateRequestRobots = {
      isPending: false,
      robots: [],
      error: ''
   }

   it('should return the initial state', () => {
      const expectedState = {
         isPending: false,
         robots: [],
         error: ''
      }
      expect(reducers.requestRobots(undefined, {})).toEqual(expectedState);
   })

   it('can handle REQUEST_ROBOTS_PENDING', () => {
      const expectedState = {
         isPending: true,
         robots: [],
         error: ''
      }
      expect(reducers.requestRobots(
         initialStateRequestRobots,
         { type: REQUEST_ROBOTS_PENDING })
      ).toEqual(expectedState);
   })

   it('can handle REQUEST_ROBOTS_SUCCESS', () => {
      const mockPayload = [
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
      const expectedState = {
         isPending: false,
         robots: mockPayload,
         error: ''
      }
      expect(reducers.requestRobots(
         initialStateRequestRobots,
         { type: REQUEST_ROBOTS_SUCCESS, payload: mockPayload })
      ).toEqual(expectedState);
   })

   it('can handle REQUEST_ROBOTS_FAILED', () => {
      const mockError = 'Error!';
      const expectedState = {
         isPending: false,
         robots: [],
         error: mockError
      }
      expect(reducers.requestRobots(
         initialStateRequestRobots,
         { type: REQUEST_ROBOTS_FAILED, payload: mockError })
      ).toEqual(expectedState);
   })
})