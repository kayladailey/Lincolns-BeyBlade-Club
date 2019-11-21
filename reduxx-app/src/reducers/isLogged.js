

const loggedReducer = ( state =false, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return !state; //could also put in 'true' as the state
    } 
};

export default loggedReducer;