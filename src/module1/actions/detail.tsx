import {createAction} from 'redux-actions';

 const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
 const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';

const increment = createAction(INCREMENT_ENTHUSIASM);
const decrement = createAction(DECREMENT_ENTHUSIASM);

export const incrementEnthusiasm = () => async (dispatch) => {
    dispatch(increment());
}
export const decrementEnthusiasm = () => async (dispatch) => {
    dispatch(decrement());
}
