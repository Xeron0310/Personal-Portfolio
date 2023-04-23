const h1 = document.querySelector('.first_section_div_h1');

h1.addEventListener('click', () => {
    h1.textContent = "『 Kang Eun Chan's PORTFOLIO 』";
});

h1.addEventListener('mouseout', () => {
    h1.textContent = '『 MY PORTFOLIO 』';
});