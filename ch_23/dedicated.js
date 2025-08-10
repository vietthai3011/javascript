let a = 1;
const worker1 = new Worker("./worker1.js");

worker1.onerror = (e) => {
    console.log("error");
};
const button = document.querySelector("button");

button.addEventListener("click", () => {
    worker1.postMessage(12);
});

worker1.onmessage = (e) => {
    console.log(e.data);
    // worker1.terminate();
};
