function random(a, b) {
    if (a < b) {
        const temp = a;
        a = b;
        b = temp;
    }
    console.log(Math.random() * (a - b) + b);
}

random(10, 20);
