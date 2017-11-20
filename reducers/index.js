import {combineReducers} from 'redux';
import tabs from './tabs';
import bill from './bill'


const rootReducer = combineReducers({
  tabs,
  bill
})

export default rootReducer
