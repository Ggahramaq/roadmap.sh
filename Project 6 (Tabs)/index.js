document.addEventListener("DOMContentLoaded", () => {
    const h2 = document.querySelector('h2');
    const span = document.querySelector('span')
    const tab = ["First Tab", "Second Tab", "Third Tab", "Fourth Tab"];

    h2.textContent = `${tab[0]} content to be displayed here.`;

    const buttons = (document.querySelector('.buttons')).querySelectorAll('.button');
    let previousIndex = 0;
    function setTab(index) {
        buttons[previousIndex].classList.remove('active');
        previousIndex = index;
        h2.textContent = `${tab[index]} content to be displayed here.`
        span.textContent = `This is ${tab[index]}.`
        buttons[index].classList.add('active');
    }
    setTab(0);
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => { setTab(index) })
    });
});