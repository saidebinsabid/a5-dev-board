document
  .getElementById("complete-task1-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task1-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading1").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<div class="bg-[#F4F7FF] rounded-xl">
                        <p class="text-gray-700 text-sm">You have Complete The Task ${taskHeading} at ${updateTime()}</p>
                        </div>`;
    taskCompleteHistory.appendChild(newDiv);
  });

document
  .getElementById("complete-task2-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task2-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading2").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<div class="bg-[#F4F7FF] rounded-xl">
                        <p class="text-gray-700 text-sm">You have Complete The Task ${taskHeading} at ${updateTime()}</p>
                        </div>`;
    taskCompleteHistory.appendChild(newDiv);
  });

document
  .getElementById("complete-task3-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task3-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading3").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<div class="bg-[#F4F7FF] rounded-xl">
                        <p class="text-gray-700 text-sm">You have Complete The Task ${taskHeading} at ${updateTime()}</p>
                        </div>`;
    taskCompleteHistory.appendChild(newDiv);
  });

document
  .getElementById("complete-task4-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task4-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading4").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<div class="bg-[#F4F7FF] rounded-xl">
                        <p class="text-gray-700 text-sm">You have Complete The Task ${taskHeading} at ${updateTime()}</p>
                        </div>`;
    taskCompleteHistory.appendChild(newDiv);
  });

document
  .getElementById("complete-task5-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task5-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading5").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<div class="bg-[#F4F7FF] rounded-xl">
                        <p class="text-gray-700 text-sm">You have Complete The Task ${taskHeading} at ${updateTime()}</p>
                        </div>`;
    taskCompleteHistory.appendChild(newDiv);
  });

document
  .getElementById("complete-task6-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    taskCompleted();
    disabledButton("complete-task6-btn");

    const taskCompleteHistory = document.getElementById(
      "task-complete-history"
    );
    const taskHeading = document.getElementById("task-heading6").innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl");
    newDiv.innerHTML = `<p class="text-gray-700 text-sm">
    You have Complete The Task 
    ${taskHeading} 
    at 
    ${updateTime()}</p>`;
    taskCompleteHistory.appendChild(newDiv);
  });
