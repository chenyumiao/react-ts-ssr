import { StoreState } from '../types/detail';
import {handleActions} from 'redux-actions';


export const detailReducer = handleActions({
  INCREMENT_ENTHUSIASM: (state:StoreState, action:any):StoreState=> ({
    ...state,
    enthusiasmLevel: state.enthusiasmLevel + 1
  }),
  DECREMENT_ENTHUSIASM: (state:StoreState, action:any):StoreState => ({
    ...state,
    enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
  })
}, {
  enthusiasmLevel:1,
  name:'Typescript'
});