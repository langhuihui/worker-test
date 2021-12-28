self.onmessage = function (_a) {
    var ports = _a.ports;
    var i = 0;
    setInterval(function () {
        ports[0].postMessage(i++);
    }, 1000);
};
