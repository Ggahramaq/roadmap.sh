let h2 = document.querySelector('h2');
let span = document.querySelector('span')
let tab = ["First Tab", "Second Tab", "Third Tab", "Fourth Tab"];

h2.textContent = `${tab[0]} content to be displayed here.`;

let buttons = document.querySelectorAll('button');


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        h2.textContent = `${tab[index]} content to be displayed here.`
        span.textContent = `This is ${tab[index]}.`
    })
});