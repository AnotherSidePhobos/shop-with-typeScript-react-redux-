import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {product_reducer} from './reducers/product_reducer'
const rootReducer = combineReducers({
    product: product_reducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store