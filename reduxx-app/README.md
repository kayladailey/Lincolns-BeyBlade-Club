
//STORE -> Data holder of our globalized state
const store = createStore(counter);

//ACTION -> Name your action for the 'thing' you would like to do. function that returns an object
const increment =() =>{
    return{
        type: "INCREMENT"
    }
}

const decrement = () => {
    return{
        type:'DECREMENT'
    }
}

//Reducer
const counter = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
    
}

//Display in the console
store.subscribe(() => console.log(store.getState()));


//DISPATCH ->
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));