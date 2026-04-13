let count = 0;

const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

window.addEventListener("DOMContentLoaded", () => {
  let savedCount = localStorage.getItem("count");

  if (savedCount !== null) {
    count = parseInt(savedCount);
  }

  updateUI();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

function updateUI() {
  countEl.textContent = count;
  updateColor();
  saveToLocalStorage();
}

function updateColor() {
  if (count > 0) {
    countEl.style.color = "green";
  } else if (count < 0) {
    countEl.style.color = "red";
  } else {
    countEl.style.color = "white";
  }
}

function saveToLocalStorage() {
  localStorage.setItem("count", count);
}