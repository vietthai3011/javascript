// 1. Pending
// 2. Fulfilled
// 3. Rejected

// const promise = new Promise((resolve, reject) => {
//     resolve("Hello");
// });

// promise
//     .then((result) => {
//         console.log("Done: ", result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject("Xin chào");
//             }, 2000);
//         });
//     })

//     .then((result) => {
//         console.log("Done: ", result);
//         return 456;
//     })

//     .catch((error) => {
//         console.log("Error: ", error);
//     });

function sendRequest2(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status <= 400) {
                const contentType = xhr.getResponseHeader("content-type");
                const isJson = contentType && contentType.includes("application/json");

                if (isJson) {
                    try {
                        resolve(JSON.parse(xhr.responseText));
                    } catch (error) {
                        reject("Invalid json format.");
                    }
                } else {
                    resolve(xhr.responseText);
                }
            } else {
                reject(`HTTP code: ${xhr.status}`);
            }
        };

        xhr.onerror = function () {
            reject("Network error.");
        };
    });
}

function fakeData() {
    return Promise.reject([1, 2, 3, 4, 5]);
}

const header = document.getElementById("header");
const footer = document.getElementById("footer");
const productList = document.getElementById("product-list");

// sendRequest2("GET", "./partials/header.html")
//     .then((responseText) => (header.innerHTML = responseText))
//     .catch((error) => console.log(error));
// sendRequest2("GET", "./partials/footer.html")
//     .then((responseText) => (footer.innerHTML = responseText))
//     .catch((error) => console.log(error));

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Timeout."), 2000);
// });

Promise.resolve("Success.").then((result) => console.log(result));
Promise.reject("Error.").catch((error) => console.log(error));

const fakeD = fakeData();
fakeD.then((result) => console.log(result)).catch((error) => console.log(error));

// Promise.race([
//     sendRequest2("GET", "./partials/header.html"),
//     sendRequest2("GET", "./partials/footer.html"),
//     timeoutPromise,
// ])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Promise.allSettled([
//     sendRequest2("GET", "./partials/header.html"),
//     sendRequest2("GET", "./partials/footer.html"),
//     timeoutPromise,
// ]).then((result) => {
//     console.log(result);

//     header.innerHTML = result[0].value;
//     footer.innerHTML = result[1].value;
// });

// Promise.all([
//     sendRequest2("GET", "./partials/header.html"),
//     sendRequest2("GET", "./partials/footer.html"),
//     timeoutPromise,
// ])
//     .then((result) => {
//         header.innerHTML = result[0];
//         footer.innerHTML = result[1];
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// sendRequest2("GET", "https://api01.f8team.dev/api/products")
//     .then((result) => {
//         const products = result.data.items;

//         products.forEach((product) => {
//             const item = document.createElement("li");

//             const title = document.createElement("p");
//             title.textContent = product.title;

//             const description = document.createElement("p");
//             description.textContent = product.description;

//             item.appendChild(title);
//             item.appendChild(description);

//             productList.appendChild(item);
//         });
//     })
//     .catch((error) => console.log(error));

// function getFirstProvince() {
//     return sendRequest2("GET", "https://api01.f8team.dev/api/address/provinces").then(
//         (result) => result.data[0]
//     );
// }

// function getFirstDistrict(provinceId) {
//     return sendRequest2(
//         "GET",
//         `https://api01.f8team.dev/api/address/districts?province_id=${provinceId}`
//     ).then((result) => result.data[0]);
// }

// function getFirstWard(districtID) {
//     return sendRequest2(
//         "GET",
//         `https://api01.f8team.dev/api/address/wards?district_id=${districtID}`
//     ).then((result) => result.data[0]);
// }

// getFirstProvince()
//     .then((province) => getFirstDistrict(province.province_id))
//     .then((district) => getFirstWard(district.district_id))
//     .then((result) => console.log(result));

// sendRequest2("GET", "https://api01.f8team.dev/api/address/provinces")
//     .then((result) => {
//         const provinces = result.data;
//         const firstProvince = provinces[0];
//         console.log(provinces);

//         return sendRequest2(
//             "GET",
//             `https://api01.f8team.dev/api/address/districts?province_id=${firstProvince.province_id}`
//         );
//     })
//     .then((result) => {
//         const districts = result.data;
//         const firstDistrict = districts[0];
//         console.log(districts);

//         // throw new Error("Error - 123");

//         return sendRequest2(
//             "GET",
//             `https://api01.f8team.dev/api/address/wards?district_id=${firstDistrict.district_id}`
//         );
//     })
//     .then((result) => {
//         const wards = result.data;
//         const firstWard = wards[0];
//         console.log(wards);
//     })
//     .catch((error) => console.log(error));
