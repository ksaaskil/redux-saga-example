const initialState = { value: 0, fetching: false, error: null }

const counterReducers = (state = initialState, action) => {
    console.info('Counter reducer handling action', action.type)
    switch (action.type){
        case 'INCREMENT':
          return { ...state, value: state.value + action.value }
        case 'INIT_FETCH':
          return { ...state, fetching: true }
        case 'STOP_FETCH':
          return { ...state, fetching: false }
        case 'SET_ERROR':
          return { ...state, error: action.value }
        default:
          return state
    }

}

export default counterReducers
