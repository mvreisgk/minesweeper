export function getClockAndStart(
  time: number,
  callback: (time: number) => void,
) {
  setInterval(() => {
    time += 1000
    callback(time)
  }, 1000)
}
