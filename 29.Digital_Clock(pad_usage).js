/**
 * Creates a digital clock that logs the current time every second
 * @returns {number} The interval ID (so the clock can be stopped)
 */
function digitalClock() {
  const intervalId = setInterval(() => {
    const currentTime = new Date();

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  return intervalId;
}
