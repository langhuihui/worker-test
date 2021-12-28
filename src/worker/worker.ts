self.onmessage = function ({ ports }) {
  let i = 0;
  setInterval(() => {
    ports[0].postMessage(i++);
  }, 1000);
}