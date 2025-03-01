function updateDateTime() {
  const now = new Date();
  return now
    .toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
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
