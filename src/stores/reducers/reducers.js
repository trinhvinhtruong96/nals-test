import { combineReducers } from 'redux';
import blogs from './blogs';

const createRootReducer = () => combineReducers({
    blogs,
});

export default createRootReducer;
