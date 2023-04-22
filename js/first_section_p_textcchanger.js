const p = document.querySelector('.first_section_div_p');

p.addEventListener('mouseover', () => {
    p.textContent = "창조자";
});

p.addEventListener('mouseout', () => {
    p.textContent = '강은찬';
});