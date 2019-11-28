const dadReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_DAD":
            return state + 1;
        case "DECREMENT_DAD":
            return state - 1;
        case "BLAST_DAD":
            return state + 5;
        default:
            return state;
    }
}

export default dadReducer;