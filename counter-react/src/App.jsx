import "./App.css";

export default function App() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log("count is now:", count);
  }

  function decrement() {
    count = count - 1;
    console.log("count is now:", count);
  }

  function reset() {
    count = 0;
    console.log("count is now:", count);
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


//The HTML-like syntax inside the return statement is called JSX (JavaScript XML)
// JSX gets transformed into React.createElement() calls behind the scenes
//<h1>Hello, World!</h1>
// becomes
// React.createElement('h1', null, 'Hello, World!')
//JSX gives you syntax highlighting, auto-completion, and compile-time error checking.


//2 differences: className instead of class, and no id attributes, we attach event handlers directly to the buttons instead of using document.getElementById() to select them.
