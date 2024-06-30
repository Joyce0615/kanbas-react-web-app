export default function ChildStateComponent({ counter, setCounter }: 
{ counter: number;
  setCounter: (counter: number) => void;}) { 
    // receive two props from pareant: counter and setcounter
    // setCounter without return value
  return ( 
    <div id="wd-child-state"> 
      <h3>Counter {counter}</h3> 
      <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click"> Increment</button> 
      <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click"> Decrement</button> 
    </div> 
  )
}