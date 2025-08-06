const style = document.styleSheets[0];

style.insertRule(
    `
    #heading:hover{
        color: red;
    }
`,
    style.cssRules.length
);

console.log(style);
