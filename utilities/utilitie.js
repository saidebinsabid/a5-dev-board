function updateTime() {
  const now = new Date();
  return now
    .toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(/,/g, "");
}

function updateWeek() {
  const now = new Date();
  return now
    .toLocaleString("en-US", {
      weekday: "short",
    })
    .replace(/,/g, "");
}

function updateDate() {
  const now = new Date();
  return now
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .replace(/,/g, "");
}

function alertSuccessful() {
  alert("Board Update Successfully");
}
function alertCongrats() {
  alert("Congrats!!! You have completed all the current task");
}

function disabledButton(id) {
  document.getElementById(id).style.opacity = "0.4";
  document.getElementById(id).style.color = "white";
  document.getElementById(id).style.cursor = "not-allowed";
  document.getElementById(id).disabled = true;
}

function enabledButton(id) {
  document.getElementById(id).style.opacity = " ";
  document.getElementById(id).style.color = " ";
  document.getElementById(id).style.cursor = " ";
  document.getElementById(id).disabled = false;
}

function taskCompleted() {
  const taskAssigned = parseInt(
    document.getElementById("task-assigned-number").innerText
  );
  const totalTaskCompleted = parseInt(
    document.getElementById("total-task-completed").innerText
  );

  const leftTask = taskAssigned - 1;
  const totalTask = totalTaskCompleted + 1;

  document.getElementById("task-assigned-number").innerText = `${leftTask}`;

  document.getElementById("total-task-completed").innerText = `${totalTask}`;

  if (leftTask === 0) {
    alertSuccessful();
    alertCongrats();
  } else {
    alertSuccessful();
  }
}
