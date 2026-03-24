

const form = document.querySelector(".form");

// convert file to base64
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result.split(",")[1]; // remove metadata
      resolve(base64);
    };

    reader.onerror = error => reject(error);
  });
};



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch('http://localhost:3500/api/submit-form', {
  // const res = await fetch("https://api.ronald-partners.net/api/submit-form", {
    method: "POST",
    body: formData
  });

  const data = await res.text();
  console.log(data);

  form.reset();
});
function myFunction() {
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}

// POPUP AFTER FORM SUBMISSION
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".button-close-modal");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  document.addEventListener(
    "click",
    function (event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches("button-close-modal") ||
        !event.target.closest("popup")
      ) {
        closeModal();
      }
    },
    false
  );
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
}

// Close modal when clicking outside the modal or on the close button
window.addEventListener("click", function (event) {
  if (event.target === popup || event.target === closeBtn) {
    closeModal();
  }
});
