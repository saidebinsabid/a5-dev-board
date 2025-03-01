function createDateSection() {
  const div = document.getElementById("update-week-date");
  const dateHeading = document.createElement("h1");
  dateHeading.classList.add("text-lg");
  dateHeading.innerHTML = `${updateWeek()} , <br>
    <span class="font-bold">${updateDate()}</span> `;
  div.appendChild(dateHeading);
}
document.addEventListener("DOMContentLoaded", createDateSection);
