const initialState = { output: null }

const middlewareReducers = (state = initialState, action) => {
    return { ...state, output: action.type };
}

export default middlewareReducers
