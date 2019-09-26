
function add(a, b) {
    postMessage([a + b]);
}

var data = [0, 0];

onmessage = function (e) {
    this.console.log(e);
    data = e.data;

}

setInterval(() => {
    add(data[0], data[1]);
}, 5000);
