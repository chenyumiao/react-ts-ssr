import {handleActions} from 'redux-actions';
import {List} from '../types/list';


export const listReducer = handleActions({
  REQUEST_GOODS: (state:List, action:any):List=> ({
    ...state,
    isFetching: true
  }),
  RECEIVE_GOODS: (state:List, action:any):List => ({
    ...state,
    isFetching: false,
    data: action.payload
  }),
  INCRE_GOODS: (state:List, action:any):List=> ({
    ...state,
    isFetching: false,
    data: state.data.concat(action.payload)
  }),
  DECRE_GOODS: (state:List, action:any):List => ({
    ...state,
    isFetching: false,
    data: state.data.slice(0,state.data.length-1)
  })
}, {
  isFetching: false,
  data: []
});