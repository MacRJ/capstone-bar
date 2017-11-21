import axios from 'axios'

export const getAllTabs = () => {
  return {
    type: 'GET_ALL_TABS',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/tabs')
  }
}
export const addTab = () => {
  return {
    type: 'ADD_TAB',
    payload: axios.post('https://murmuring-tundra-40675.herokuapp.com/tabs/add')
  }
}

export const selectTab = (id) => {
  return {
    type: 'SELECT',
    payload: axios.post(`https://murmuring-tundra-40675.herokuapp.com/tabs/select/${id}`)
  }
}

export const getBill = () => {
  return {
    type: 'GET_BILL',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/bill')
  }
}

// Calculating Total and giving it to total Component
var newTotal = 0
export const upDateBill = (total) => {
  if(total === null) {
    newTotal = 0
  } else {
totalInt = parseInt(total)
newTotal = parseInt(newTotal) + totalInt
}
  return {
    type: 'UPDATE_TOTAL',
    payload: newTotal
  }
}

// Getting all the Items for the 'bar'
export const getAllItems = () => {
  return {
    type: 'GET_ALL_ITEMS',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/items')
  }
}
// selecting a type of items
export const getType = (id) => {
  console.log('theID', id)
  return {
    type: 'GET_TYPE',
    payload: axios.post(`https://murmuring-tundra-40675.herokuapp.com/items/select/${id} `)
  }
}
