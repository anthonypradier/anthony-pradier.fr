const form = document.getElementById('contact-form');
const ph = document.querySelectorAll('.form-item');
const phBefore = window.getComputedStyle(form, '::before');

console.log(phBefore.color);
for(let elt of ph) {
    console.log('elt');
    
}
