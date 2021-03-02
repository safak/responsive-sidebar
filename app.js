const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
});

// const colors = document.querySelectorAll(".color-box");
// const sidebar = document.querySelector(".sidebar");
// const activeListItem = document.querySelector(".list-item.active");

// colors.forEach((color) => {
//   color.addEventListener("click", () => {
//     if (color.classList.contains("dark")) {
//       sidebar.style.backgroundColor = "#111827";
//       activeListItem.style.backgroundColor = "#374151";
//     } else if (color.classList.contains("night")) {
//       sidebar.style.backgroundColor = "#312e81";
//       activeListItem.style.backgroundColor = "#4338ca";
//     } else {
//       sidebar.style.backgroundColor = "#f3f4f6";
//       activeListItem.style.backgroundColor = "#d1d5db";
//     }
//   });
// });


// classList.add remove