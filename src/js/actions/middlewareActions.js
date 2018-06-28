import { dispatch } from 'react-redux'

export const incrementCounter = (value) => {
  // console.log('Incrementing counter');
  return {
    type: "INCREMENT",
    value
  }
}

export const incrementCounterAsync = (msg) => {
  // console.log('Incrementing counter async');
  return {
    type: "INCREMENT_ASYNC"
  }
}

export const incrementCounterFailing = (msg) => {
  // console.log('Incrementing counter async');
  return {
    type: "INCREMENT_FAILING"
  }
}

export const initFetch = (msg) => {
  // console.log('Initiating fetch');
  return {
    type: "INIT_FETCH"
  }
}

export const stopUpdate = (msg) => {
  // console.log('Initiating fetch');
  return {
    type: "STOP_FETCH"
  }
}

export const setError = (msg) => {
  return {
    type: "SET_ERROR",
    value: msg
  }
}
