import {CHANGE_SEARCH_TEXT} from './constants';

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