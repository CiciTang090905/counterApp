import "./App.css";
import { useState, useEffect } from "react"; // 👀 Import useState

export default function App() {
  const [count, setCount] = useState(0); // 👀 Replace let count = 0
  //useState(0) creates a piece of state initialized to 0
  //It returns an array with two items: the current value (count) and a function to update it (setCount)
  //array destructuring

  //when call setCount --> stores updated val, and re-runs component function
  //UI = f(state) --> update state, and the UI follows

  useEffect(() => {
    console.log("count changed to:", count);
  }, [count]); //whenever count changes, regardless of why, run this side effect
  //instead of adding log message to every function manually

  //2 args: a function, and an dependency array.
  //after a render, React runs the effect on changed values from last render
  //reference is what matters in array
  //no matter which handler caused it

  function increment() {
    setCount(count + 1); // 👀 Use setCount instead of count =
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

//attach event handlers directly to the buttons using onClick
//already return JSX, UI do not render the changes currently --> need to use useState to let React know


//The HTML-like syntax inside the return statement is called JSX (JavaScript XML)
// JSX gets transformed into React.createElement() calls behind the scenes
//<h1>Hello, World!</h1>
// becomes
// React.createElement('h1', null, 'Hello, World!')
//JSX gives you syntax highlighting, auto-completion, and compile-time error checking.


//2 differences: className instead of class, and no id attributes, we attach event handlers directly to the buttons instead of using document.getElementById() to select them.
