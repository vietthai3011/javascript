/**
 * promise.then() / ,catch() / .finally()
 * MutationObserver
 * queueMicrotask
 * process.nextTick()
 */

console.log("A");

setTimeout(() => {
    console.log("B");
    Promise.resolve().then(() => console.log("C"));
}, 0);

Promise.resolve()
    .then(() => {
        console.log("D");
        setTimeout(() => console.log("E"), 0);
        return Promise.resolve();
    })
    .then(() => console.log("F"));

setTimeout(() => console.log("G"), 0);

Promise.resolve().then(() => {
    console.log("H");
    Promise.resolve().then(() => console.log("I"));
});

console.log("J");

// A J D H I F B C G E
