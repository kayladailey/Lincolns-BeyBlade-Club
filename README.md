
**STORE -> Data holder of our globalized state**
const store = createStore(counter);

**ACTION -> Name your action for the reducer you would like to do. A function that returns an object**
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

**REDUCER -> where the instructions for the action are placed**

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


**DISPATCH -> Used to dispatch our action and state**
store.dispatch(increment());
store.dispatch(decrement());


//Is this the proper way to break up the buttons?