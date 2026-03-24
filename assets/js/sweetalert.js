(function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const API_URL = form.dataset.api;

            try {

                const formData = new FormData(form);

                const res = await fetch(API_URL, {
                    method: "POST",
                    body: formData
                });

                const data = await res.text();

                console.log("Response:", data);

                Swal.fire(
                    "Success",
                    "Thank you. We will get back to you soon!",
                    "success"
                );

                form.reset();

            } catch (err) {

                console.error("Error submitting form:", err);

                Swal.fire(
                    "Error",
                    "There was an error submitting the form.",
                    "error"
                );

            }

        });

    });

})();