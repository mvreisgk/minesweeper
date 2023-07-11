export function getClockAndStart(
  time: number,
  callback: (time: number) => void,
) {
  return setInterval(() => {
    time += 1000
    callback(time)
  }, 1000)
}
