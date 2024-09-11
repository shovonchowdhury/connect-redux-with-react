let initialState={
    name: 'shovon',
    title:'das',
    post: 10,
}

import {createStore} from 'redux';
import { myCreateStore } from './my-redux';

export function reducer(state=initialState,action){

    if(action.type==='post/increment')
        return {...state, post: state.post + 1 }
    if(action.type==='post/decrement')
        return {...state, post: state.post - 1 }
    if(action.type==='post/incrementBy')
        return {...state, post: state.post + action.payload}
    if(action.type==='post/decrementBy')
        return {...state, post: state.post - action.payload }
    else
        return state
}

const store = createStore(
    reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.()
  );
console.log(store);

const myStore= myCreateStore(reducer);
console.log(myStore);

myStore.subscribe(()=>{
    console.log(myStore.getState());
})

const unsubscribe=myStore.subscribe(()=>{
    console.log('yo bro');
})

// console.log(myStore.getState());

myStore.dispatch({type:'post/increment'});
// console.log(myStore.getState());
myStore.dispatch({type:'post/increment'});
unsubscribe();
// console.log(myStore.getState());
myStore.dispatch({type:'post/decrementBy', payload: 5});
// console.log(myStore.getState());





