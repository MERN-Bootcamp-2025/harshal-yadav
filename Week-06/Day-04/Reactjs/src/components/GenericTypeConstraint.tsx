import React from 'react';


function GenericTypeConstraint<T extends keyof U, U extends object>(key: T, arr: U[]){
    return arr.map(el=> el[key]);
}

const result=   GenericTypeConstraint('name',[
    {count:1, name: 'Ashish'},
     {count:2, name: 'Ashish '},

])


export default GenericTypeConstraint