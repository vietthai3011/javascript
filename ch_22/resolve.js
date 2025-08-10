console.log(1);

const promise = new Promise((resolve) => {
    resolve(2);
});

promise.then(() => console.log(2));

// Promise.resolve(2).then((val) => console.log(val));

console.log(3);
