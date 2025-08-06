// function sendRequest(method, url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.send();

//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 400) {
//             if (typeof callback === "function") callback(xhr.responseText);
//         }
//     };
// }

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 400) {
                resolve(xhr.responseText);
            } else reject("error");
        };
    });
}

const header = document.querySelector("#header");
const ProductList = document.createElement("header");

sendRequest("GET", "./partials/header.html").then((responseText) => {
    header.innerHTML = responseText;
});

const productList = document.querySelector(".product-list");
sendRequest("get", "https://api01.f8team.dev/api/products").then((responseText) => {
    const response = JSON.parse(responseText);

    const products = response.data.items;

    html = products.forEach((product) => {
        const li = document.createElement("li");
        li.innerText = product.title;

        productList.appendChild(li);
    });
});

const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});

// promise
//     .then((result) => {
//         console.log("done: ", result);
//         return new Promise((_, reject) => {
//             setTimeout(() => {
//                 reject("Hello 123");
//             }, 3000);
//         });
//     })
//     .then((result) => console.log("done 2: ", result))
//     .catch((error) => console.log("error: ", error));


