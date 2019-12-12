const lincolnReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_LINCOLN":
            return state + 1;
        case "DECREMENT_LINCOLN":
            return state - 1;
        case "BLAST":
            return state + 5;
        default:
            return state;
    }
}

export default lincolnReducer;