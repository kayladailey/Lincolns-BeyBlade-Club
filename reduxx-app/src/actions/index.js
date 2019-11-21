//Having all the action in the selerate folder like this is helpful for larger apps
// you can also put them in the App component 

export const incrementK = () => {
    return{
        type: 'INCREMENT_KENZIE'
    };
}
export const blastK = () => {
    return{
        type: 'BLAST_K'
    };
}
export const decrementK = () => {
    return{
        type: 'DECREMENT_KENZIE'
    };
}

export const incrementL = () => {
    return{
        type: 'INCREMENT_LINCOLN'
    };
}

export const blastL = () => {
    return{
        type: 'BLAST_L'
    };
}
export const decrementL = () => {
    return{
        type: 'DECREMENT_LINCOLN'
    };
}