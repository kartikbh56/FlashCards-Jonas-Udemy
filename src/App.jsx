import { useState } from "react";
function App() {
  return (
    <>
      <h1>Date Counter</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date()
  function getDateAtCount(count) {
    const now = new Date()
    now.setDate(now.getDate()+count)
    return now
  }
  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        onChange={(e) => {
          setSteps(Number(e.target.value));
        }}
        value={steps}
      />
      <div>Steps : {steps}</div>
      <div>
        <button onClick={() => {
          setCount(count=>count-steps)
        }}>-</button>
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => {
          setCount(count=>count+steps)
        }}>+</button>
      </div>
      <div>
        {today.toLocaleDateString() === getDateAtCount(count).toLocaleDateString() ? <h4>Today is {getDateAtCount(count).toDateString()}</h4> :
          <h4>{Math.abs(count)} days {today > getDateAtCount(count) ? 'ago was' : 'from today is'} {getDateAtCount(count).toDateString()}</h4>}
      </div>
      {count !== 0 &&
        <button onClick={() => {
          setCount(0)
        }}>Reset</button>
      }
    </>
  );
}

export default App;
