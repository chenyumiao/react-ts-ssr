import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../reducers/index';
import thunk from 'redux-thunk';


/*export const store = createStore(rootReducer,initialState, composeEnhancers(
    applyMiddleware(...middleware)
));*/

export default function configureStore(preloaderState){
    const store = createStore(
        rootReducer,
        preloaderState,
        compose(
            applyMiddleware(thunk)
        )
    );

    return store;
}