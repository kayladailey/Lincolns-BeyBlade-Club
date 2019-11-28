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
        type: 'BLAST'
    };
}
export const decrementL = () => {
    return{
        type: 'DECREMENT_LINCOLN'
    };
}

export const incrementDad = () => {
    return{
        type: 'INCREMENT_DAD'
    };
}

export const blastDad = () => {
    return{
        type: 'BLAST_DAD'
    };
}
export const decrementDad= () => {
    return{
        type: 'DECREMENT_DAD'
    };
}

export const incrementMom = () => {
    return{
        type: 'INCREMENT_Mom'
    };
}

export const blastMom = () => {
    return{
        type: 'BLAST_MOM'
    };
}
export const decrementMom = () => {
    return{
        type: 'DECREMENT_MOM'
    };
}