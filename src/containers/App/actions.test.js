import {
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_SUCCESS,
   REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('requestRobotsApi', () => {
   it('can dispatch action REQUEST_ROBOTS_PENDING', () => {
      const store = mockStore();
      store.dispatch(actions.requestRobotsApi());
      const action = store.getActions();

      const expectedAction = {
         type: REQUEST_ROBOTS_PENDING,
      }
      expect(action[0]).toEqual(expectedAction);
   })
})