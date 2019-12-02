import {CHANGE_SEARCH_TEXT} from './constants';

import * as reducers from './reducers';

describe('searchRobot', () => {
   it('should return the initial state', () => {
      expect(reducers.searchRobots(undefined, {})).toEqual({searchText: ''});
   })

   it('can handle CHANGE_SEARCH_TEXT', () => {
      const initialStateSearchRobots = {
         searchText: ''
      }
      expect(reducers.searchRobots(
         initialStateSearchRobots,
         { type: CHANGE_SEARCH_TEXT, payload: 'abc'})
      ).toEqual({searchText: 'abc'});
   })
})