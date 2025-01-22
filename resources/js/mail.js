const btn_send = document.getElementById('send-form');
const contact_form = document.getElementById('contact-form');
// console.log(contact_form);

contact_form.addEventListener('submit', function(e) {
    e.preventDefault();

    // check the value of the btns depending on if they are checked or not

    const btn_insta = document.getElementById('btn-instagram');
    const btn__linkedin = document.getElementById('btn-linkedin');
    const btn_x = document.getElementById('btn-x');
    const btn_wom = document.getElementById('btn-wom');
    const btn_other = document.getElementById('btn-other');
    if(!btn_insta.checked) {
        btn_insta.value = "";
    }
    if(!btn__linkedin.checked) {
        btn__linkedin.value = "";
    }
    if(!btn_x.checked) {
        btn_x.value = "";
    }
    if(!btn_wom.checked) {
        btn_wom.value = "";
    }
    if(!btn_other.checked) {
        btn_other.value = "";
    }

    const params = {
        user_name: document.getElementById('user-name').value,
        user_email: document.getElementById('user-email').value,
        user_number: document.getElementById('user-number').value,
        user_company: document.getElementById('user-company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        contact_instagram: btn_insta.value,
        contact_linkedin: btn__linkedin.value,
        contact_x: btn_x.value,
        contact_wom: btn_wom.value,
        contact_other: btn_other.value,
    }
    
    // TODO: A loading screen when the mail is beeing sending

    const serviceID = 'service_rfwo6zo';
    const templateID = 'contact_form';
    emailjs.send(serviceID, templateID, params)
        .then(() => {
            contact_form.reset();
            alert('E-mail envoyé. Une réponse automatique devrait vous parvenir.');
            // TODO: use an other thing than alert to alert the user
        }, (err) => {
            // btn_send.value = 'Send email';
            alert(JSON.stringify(err));
        });
});
