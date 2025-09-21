class User {
    #password;
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    checkPassword(input) {
        this.#password === input;
    }
}

const user = new User("abc@gmail.com", 123456);

console.log(user.checkPassword(123));
