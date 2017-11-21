import {combineReducers} from 'redux';
import tabs from './tabs';
import bill from './bill';
import total from './total'


const rootReducer = combineReducers({
  tabs,
  bill,
  total
})

export default rootReducer
