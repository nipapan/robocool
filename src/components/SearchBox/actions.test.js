import { CHANGE_SEARCH_TEXT } from './constants';
import * as actions from './actions';

describe('setSearchText', () => {
   it('return correct action object', () => {
      const expectedAction = {
         type: CHANGE_SEARCH_TEXT,
         payload: 'abc'
      }
      expect(actions.setSearchText('abc')).toEqual(expectedAction);
   })
})