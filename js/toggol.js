document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const body = document.getElementById("main-body");
    const colors = [
      "#05668d",
      "#284b63",
      "#102b3f",
      "#62929e",
      "#c2dfe3",
      "#ccdbfd",
      "#7b2cbf",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });

document
  .getElementById("discover-new")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "blog.html";
  });
document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("task-complete-history").innerHTML = " ";
  });
