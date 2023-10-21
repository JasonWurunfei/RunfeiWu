export function getFormatTimeString(datetime) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date(datetime);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  var hour = date.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  var minute = date.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  return `${dayOfWeek}, ${month} ${day}, ${year} ${hour}:${minute}`;
}