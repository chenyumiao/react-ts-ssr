import {combineReducers} from 'redux';
import {listReducer} from './list';
import {detailReducer} from './detail'

export const rootReducer = combineReducers({
    listReducer,
    detailReducer
});