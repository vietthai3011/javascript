// API response handler
function User(data) {
    this.name = data.name;
    this.email = data.email;
}

// Không strict mode – Bug âm thầm
const user1 = new User({ name: "Alice", email: "alice@example.com" }); // ✅
const user2 = User({ name: "Bob", email: "bob@example.com" }); // ❌ Quên new

console.log(user1); // User object
console.log(user2); // undefined
console.log(window.name, window.email); // "Bob", "bob@example.com" – biến global!

// Strict mode – Lỗi rõ ràng
const user3 = User({ name: "Charlie", email: "charlie@example.com" });
// ❌ TypeError: Cannot set property 'name' of undefined

console.log("user3: ", user3); // undefined

function a(data, data) {
    "use strict";
    this.name = data.name;
    this.email = data.email;
}

a(1, 2);
