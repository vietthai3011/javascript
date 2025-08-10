const BASE_URL = "https://api01.f8team.dev/api";

async function send(method, url) {
    const res = await fetch(url, { method });

    if (!res.ok) throw new Error(`HTTP code: ${res.status}`);

    const type = res.headers.get("content-type");
    const isJson = type && type.includes("application/json");

    try {
        return isJson ? res.json() : res.text();
    } catch (error) {
        throw new Error("Invalid JSON format.");
    }
}

const header = document.getElementById("header");
const footer = document.getElementById("footer");
const productList = document.getElementById("product-list");

send("GET", "./partials/header.html").then((result) => (header.innerHTML = result));
send("GET", "./partials/footer.html").then((result) => (footer.innerHTML = result));

send("GET", "https://api01.f8team.dev/api/products")
    .then((result) => {
        const products = result.data.items;

        products.forEach((product) => {
            const item = document.createElement("li");

            const title = document.createElement("p");
            title.textContent = product.title;

            const description = document.createElement("p");
            description.textContent = product.description;

            item.appendChild(title);
            item.appendChild(description);

            productList.appendChild(item);
        });
    })
    .catch((error) => console.log(error));
