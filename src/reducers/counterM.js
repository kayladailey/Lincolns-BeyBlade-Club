const momReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_Mom":
            return state + 1;
        case "DECREMENT_MOM":
            return state - 1;
        case "BLAST_MOM":
            return state + 5;
        default:
            return state;
    }
}

export default momReducer;