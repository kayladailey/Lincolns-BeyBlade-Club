//Reducer
const kenzieReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_KENZIE":
            return state + 1;
        case "DECREMENT_KENZIE":
            return state - 1;
            case "BLAST_K":
                return state + 5;
        default:
            return state;
    }
    
}

export default kenzieReducer;
    