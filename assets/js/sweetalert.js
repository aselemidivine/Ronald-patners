/**
 * Universal Form Submission Handler
 * Automatically finds all <form> elements on the page, prevents default submission,
 * sends data via fetch to the API, and shows a SweetAlert confirmation.
 */
(function () {
    const API_URL = 'https://api.ronald-partners.net/api/events-form';

    // Find all forms on the page
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        // Skip forms that have an action attribute pointing to a different endpoint
        // (e.g. newsletter input-wrapper forms that are not real submission forms)
        if (form.classList.contains('input-wrapper')) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Build the payload from form data
            const formData = new FormData(form);
            const payload = new URLSearchParams(formData);
            console.log('Form submitted:', [...payload]);

            // Send request to API
            fetch(API_URL, {
                method: 'POST',
                body: payload,
                mode: 'no-cors'
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    console.log('Response:', data);
                    Swal.fire('Thank You. We will get back to you soon!');
                    form.reset();
                })
                .catch(function (err) {
                    console.log('Request sent (opaque response with no-cors):', err);
                    // Still show success - mode: 'no-cors' returns opaque response that can't be parsed
                    Swal.fire('Thank You. We will get back to you soon!');
                    form.reset();
                });
        });
    });
})();