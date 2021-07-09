import { combineReducers } from 'redux';
import messageBox from './message-box';

const createRootReducer = () => combineReducers({
    messageBox,
});

export default createRootReducer;
