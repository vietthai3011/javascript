importScripts("./helper.js");

helper("hEllo");

// Main thread ------------------- worker1 (Other thread)

// postMessage(data): gửi
// onmessage: nhận

console.log(this);

self.onmessage = (e) => {
    self.postMessage(e.data);
    self.close();
};
