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

const BASE_URL = "https://api01.f8team.dev/api";

async function getFirstProvince() {
    const result = await sendRequest2("GET", `${BASE_URL}/address/provinces`);

    return result.data[0];
}

async function getFirstDistrict(provinceId) {
    const result = await sendRequest2(
        "GET",
        `${BASE_URL}/address/districts?province_id=${provinceId}`
    );

    return result.data[0];
}

async function getFirstWard(districtID) {
    const result = await sendRequest2("GET", `${BASE_URL}/address/wards?district_id=${districtID}`);

    return result.data[0];
}

// getFirstProvince()
//     .then((province) => getFirstDistrict(province.province_id))
//     .then((district) => getFirstWard(district.district_id))
//     .then((result) => console.log(result));

// const rejectPromise = new Promise((_, reject) => {
//     setTimeout(() => reject("Error."), 2000);
// });

// const send = function (id, timeout) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(id), 2000);
//     });
// };

async function run() {
    const province = await getFirstProvince();
    const district = await getFirstDistrict(province.province_id);
    const ward = await getFirstWard(district.district_id);

    console.log(ward);
}

run();
