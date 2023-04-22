const h1 = document.querySelector('.first_section_div_h1');

h1.addEventListener('mouseover', () => {
    h1.textContent = "Kang Eun Chan's PORTFOLIO";
});

h1.addEventListener('mouseout', () => {
    h1.textContent = 'HELLO WORLD!';
});

h1.addEventListener('onclick', () => {
    h1.textContent = "THE PORTPOLIO";
});