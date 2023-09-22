// document.addEventListener('DOMContentLoaded', function () {
//     const formStatusElement = document.querySelector('#formStatus');
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         formStatusElement.textContent = 'Submitting...';

//         const nameInput = document.querySelector('#name');
//         const emailInput = document.querySelector('#email');
//         const messageInput = document.querySelector('#message');

//         const formData = {
//             name: nameInput.value,
//             email: emailInput.value,
//             message: messageInput.value,
//         };

//         console.log(formData);

//         const template_id = "template_xizuw7o";
//         const service_id = "service_hqhlrhd";
//         const user_id = "i1bySC2M_3MR3Fkt1";
//         sendFeedback(service_id, template_id, {
//             from_name: formData.name,
//             from_email: formData.email,
//             message: formData.message,
//         }, user_id);
//     });

//     function sendFeedback(service_id, template_id, variables, user_id) {
//         emailjs.send(service_id, template_id, variables, user_id)
//             .then(function (res) {
//                 console.log('Email successfully sent!');
//                 console.log(variables);
//                 formStatusElement.textContent = 'Submitted';
//             })
//             .catch(function (err) {
//                 console.error('Oh well, you failed. Here are some thoughts on the error that occurred:', err);
//             });
//     }
// });
// function changeColor() {
//     var button = document.getElementById('colorButton');
    
//     // Check the current color and toggle it
//         button.style.backgroundColor = 'purple';
//     }
    // Get all section elements

    // Listen to scroll events
    window.addEventListener('scroll', updateURL);

    // Initial URL update
    updateURL();

    const spinButton = document.getElementsByClassName('spinButton');
    const spinningImage = document.getElementsByClassName('imagespin');
    
    spinButton.addEventListener('click', () => {
        spinningImage.classList.add('makespin');
    });
    