function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 3000);
    });
}

console.log("HIển thị loading");

fetchData()
    .then(() => {
        console.log("Hiển thị dữ liệu.");
    })
    .catch(() => {
        console.log("Thông báo lỗi");
    })
    .finally(() => {
        console.log("Tắt loading");
    });
