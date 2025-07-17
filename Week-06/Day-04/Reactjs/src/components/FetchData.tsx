import React from 'react'

async function  FetchData<T>(path:string): Promise<T>{
    const res =await fetch(path);
    const json= await res.json();
  return  json as T;
}

const run = async()=>{
    const user=await FetchData<User>('/users');
    const message= await FetchData<Message>('/messages');
}

const result= wrapInArray<string>('a');
const result2= wrapInArray<number>(123);

export default FetchData