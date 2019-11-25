import {
   CHANGE_SEARCH_TEXT,
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_SUCCESS,
   REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearchRobots = {
   searchText: ''
}

export const searchRobots = (state=initialStateSearchRobots, action={}) => {
   switch (action.type) {
      case CHANGE_SEARCH_TEXT:
         return Object.assign({}, state, {searchText: action.payload});
      default :
         return state;
   }
}

const initialStateRequestRobots = {
   isPending: false,
   robots: [],
   error: ''
}

export const requestRobots = (state=initialStateRequestRobots, action={}) => {
   switch (action.type) {
      case REQUEST_ROBOTS_PENDING:
         return Object.assign({}, state, {isPending: true});
      case REQUEST_ROBOTS_SUCCESS:
         return Object.assign({}, state, {robots: action.payload, isPending: false});
      case REQUEST_ROBOTS_FAILED:
         return Object.assign({}, state, {error: action.payload, isPending: false});
      default:
         return state;
   }
}