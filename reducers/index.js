import {combineReducers} from 'redux';
import tabs from './tabs';
import bill from './bill';
import total from './total';
import items from './items'


const rootReducer = combineReducers({
  tabs,
  bill,
  total,
  items
})

export default rootReducer
