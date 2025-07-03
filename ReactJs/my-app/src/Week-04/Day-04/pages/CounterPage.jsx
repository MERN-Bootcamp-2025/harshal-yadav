import { useReducer } from 'react';
import Button from '../../../Day-09/Button';
import { produce } from 'immer';
// import useCounter from '../Hooks/use-counter';


const reducer = (state, action) => {
  switch (action.type) {
    case 'set-value-to-add':
      return { ...state, valueToAdd: action.payload ?? 0 };
    case 'increment-count':
      return {
        // ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    case 'decrement-count':
      return {
        ...state,
        count: state.count - state.valueToAdd,
        valueToAdd: 0
      };
      case 'Add_To_Reducer':
         return{
          ...state,
          count: action.payload
         }
    default:
      return state;
  }
};


function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);
  const [state, dispatch] =  useReducer(reducer,{count:initialCount, valueToAdd:0});

  const handleInputChange=(event)=>{
    console.log("event",event)
    const value= parseInt(event.target.value) || " ";
   return   dispatch({
    type: 'set-value-to-add',
    payload: isNaN(value) ? 0 : value
  });
  }
 const handleIncrement = () => {
    dispatch({ type: 'increment-count' });
  };

   const handleDecrement = () => {
    dispatch({ type: 'decrement-count' });
  };
  return (
    <div>
      <h1>Count is {state.count}</h1>
       <input
        type="number"
        value={state.valueToAdd ?? ''}
        onChange={handleInputChange}
      />
      <Button  label="add" type="button"  onClick={handleIncrement}/>
       <Button  label="Substract" type="button"  onClick={handleDecrement}/>
    </div>
  );
}

export default CounterPage;
