console.log(1);
fetch("https://dummyjson.com/users")
    .then((res) => {
        console.log(2);
        return res.json();
    })
    .then((data) => console.log(3));

setTimeout(() => {
    console.log(4);
}, 0);

Promise.resolve().then(() => {
    console.log(5);
});

console.log(6);
