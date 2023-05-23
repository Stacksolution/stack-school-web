const initialState = {
    empty: false
};

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, [action.payload]: true };
        case 'HIDE':
            return { ...state, [action.payload]: false };
        default:
            return state;
    }
};
export default toggleReducer;