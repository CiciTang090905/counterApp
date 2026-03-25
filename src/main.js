import "./styles.css";

const app = document.getElementById("app");

// Create elements
const container = document.createElement("div");
container.className = "counter";

const display = document.createElement("h1");
display.textContent = "Count: 0";

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+";

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "−";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

// Assemble the tree
container.appendChild(display);
container.appendChild(incrementBtn);
container.appendChild(decrementBtn);
container.appendChild(resetBtn);
app.appendChild(container);

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
