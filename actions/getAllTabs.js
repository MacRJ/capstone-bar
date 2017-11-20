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
    payload: axios.post('https://murmuring-tundra-40675.herokuapp.com/tabs/select/' + id)
  }
}

export const getBill = () => {
  return {
    type: 'GET_BILL',
    payload: axios.get('https://murmuring-tundra-40675.herokuapp.com/bill')
  }
}
