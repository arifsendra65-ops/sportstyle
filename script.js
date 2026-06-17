const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-btn");
const cartBtn = document.getElementById("cartBtn");

let count = 0;

addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;

    btn.textContent = "Added ✓";
    btn.style.background = "#d9d9d9";
    btn.style.color = "#000";

    setTimeout(() => {
      btn.textContent = "Add to cart";
      btn.style.background = "#fff";
      btn.style.color = "#000";
    }, 1200);
  });
});

cartBtn.addEventListener("click", () => {
  alert(`You have ${count} item(s) in cart.`);
});