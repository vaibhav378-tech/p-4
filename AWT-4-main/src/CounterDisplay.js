import { useContext } from 'react';
import { MyContext } from './MyContext';

function CounterDisplay() {
  const { counter} = useContext(MyContext);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

export default CounterDisplay