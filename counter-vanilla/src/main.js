// import "./styles.css";

// const app = document.getElementById("app");

// // Create elements
// const container = document.createElement("div");
// container.className = "counter";

// const display = document.createElement("h1");
// display.textContent = "Count: 0";

// const incrementBtn = document.createElement("button");
// incrementBtn.textContent = "+";

// const decrementBtn = document.createElement("button");
// decrementBtn.textContent = "−";

// const resetBtn = document.createElement("button");
// resetBtn.textContent = "Reset";

// // Assemble the tree
// container.appendChild(display);
// container.appendChild(incrementBtn);
// container.appendChild(decrementBtn);
// container.appendChild(resetBtn);
// app.appendChild(container);

// // State and update function
// let count = 0;

// function updateCounter() {
//     display.textContent = "Count: " + count;
// }

// // Event listeners
// incrementBtn.addEventListener("click", () => {
//     count++;
//     updateCounter();
// });

// decrementBtn.addEventListener("click", () => {
//     count--;
//     updateCounter();
// });

// resetBtn.addEventListener("click", () => {
//     count = 0;
//     updateCounter();
// });

import "./styles.css";

const app = document.getElementById("app");

// Set up the layout using innerHTML
app.innerHTML = `
  <div class="counter">
    <h1 id="display">Count: 0</h1>
    <button id="increment">+</button>
    <button id="decrement">&minus;</button>
    <button id="reset">Reset</button>
  </div>
`;

// Get references to elements
const display = document.getElementById("display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// State and update function
let count = 0;

function updateCounter() {
    display.textContent = "Count: " + count;
}

// Event listeners
incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

//more readable code
//but still no validation, easy to make bugs(like typo), need to query the DOM multiple times, not reusable


//if forgot to rerender by calling func, it is easy to lead to out of sync between state and UI, and hard to debug
//the variable gets updated, but the UI does not reflect the change
//Issue: hard to keep everything in sync when scale

//UI: direct reflection of current state
//the UI is a predictable output of that state. When state changes, the UI should update automatically. --> React

//React: HTML-like syntax in JavaScript, Automatic re-rendering, Component-based, Efficient updates
//Vite for bundling React to js, transforms JSX(HTML-like syntax) to JS

