const p = document.querySelector('.first_section_div_p');

p.addEventListener('click', () => {
    p.textContent = "KANG EUN CHAN";
});

p.addEventListener('mouseout', () => {
    p.textContent = '강은찬';
});