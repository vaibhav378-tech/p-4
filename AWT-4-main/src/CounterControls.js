import { useContext } from 'react';
import { MyContext } from './MyContext';

function CounterControls() {
  const { counter, setCounter } = useContext(MyContext);
  
  const increment=()=>{
    setCounter(counter+1)
}

const decrement=()=>{
    setCounter(counter-1)
}

return(
    <>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>
    </>
)
}

export default CounterControls 