function sendRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status <= 400) {
            if (typeof callback === "function") callback(xhr.responseText);
        }
    };
}

const header = document.getElementById("header");
const footer = document.getElementById("footer");
const productList = document.getElementById("product-list");

sendRequest("GET", "./partials/header.html", (responseText) => (header.innerHTML = responseText));
sendRequest("GET", "./partials/footer.html", (responseText) => (footer.innerHTML = responseText));

sendRequest("GET", "https://api01.f8team.dev/api/address/provinces", (responseText) => {
    const response = JSON.parse(responseText);
    const provinces = response.data;
    const firstProvince = provinces[0];
    console.log(provinces);

    sendRequest(
        "GET",
        `https://api01.f8team.dev/api/address/districts?province_id=${firstProvince.province_id}`,
        (responseText) => {
            const response = JSON.parse(responseText);
            const districts = response.data;
            const firstDistrict = districts[0];
            console.log(districts);

            sendRequest(
                "GET",
                `https://api01.f8team.dev/api/address/wards?district_id=${firstDistrict.district_id}`,
                (responseText) => {
                    const response = JSON.parse(responseText);
                    const wards = response.data;
                    const firstWard = wards[0];
                    console.log(wards);
                }
            );
        }
    );
});
