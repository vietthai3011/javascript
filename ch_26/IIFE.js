for (var i = 0; i < 3; i++) {
    ((index) => setTimeout(() => console.log(index), 1000))(i);
}
