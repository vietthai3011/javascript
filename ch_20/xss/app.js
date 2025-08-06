const article = document.querySelector("#article");

const content = `
    <h1>Hello</h1>
    <h2>Hi</h2>
    <img src="" onerror="alert('Hello')">
`;
const clean = DOMPurify.sanitize(content);
console.log(clean);

article.innerHTML = clean;
