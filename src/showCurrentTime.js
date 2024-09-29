export function showCurrentTime() {
  const timeElement = document.querySelector('.time-display');
  const time = new Date().toLocaleTimeString();
  if (timeElement) {
    timeElement.textContent = `Current time is: ${time}`;
  }
}
