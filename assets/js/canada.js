
const formVValue = document.querySelector('.form');

//reset form value...
const resetForm = () => {
  formVValue.reset();
};

formVValue.addEventListener('submit', function(e) {
  e.preventDefault();
  //send request using urlencoded
  const prePayload = new FormData(formVValue);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);

  //plug into the database .....  
  // replace url with your api url
  // fetch('https://wild-blue-salmon-vest.cyclic.app/api/submit-form', {
    // fetch('https://api.ronald-partners.net/api/submit-form', {
    fetch('http://localhost:3500/api/submit-form', {
    method: 'POST',
    body: payload,
    mode: 'no-cors'
  })
    
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  resetForm();
});

// Function to alert when form have been submitted
var form = document.getElementById('form');

function myFunction() {
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}


// TO TOP MENU 

// const toTop = document.querySelector (".to-top");
// window.addEventListener("scroll", () => {
//     if  (window.pageYOffset > 100)  {
//         toTop.classList.add("active");
//     }
//     else {
//         toTop.classList.remove ("active");
//     }
// })
// });

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
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches("button-close-modal") ||
        !event.target.closest("popup")
      ) {
        closeModal()
      }
    },
    false
  )
}


function closeModal() {
    document.getElementById("popup").style.display = "none"
  }
  
  // Close modal when clicking outside the modal or on the close button
  window.addEventListener("click", function(event) {
    if (event.target === popup || event.target === closeBtn) {
      closeModal();
    }
  });





  const formDetails = document.querySelector('.form-value');

//reset form value...
const resetFormAfterSubmission = () => {
  formDetails.reset();
};

formDetails.addEventListener('submit', function(e) {
  e.preventDefault();
  //send request using urlencoded
  const prePayload = new FormData(formDetails);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);

  //plug into the database .....  
  // replace url with your api url
  // fetch('https://wild-blue-salmon-vest.cyclic.app/api/submit-form', {
    // fetch('https://api.ronald-partners.net/api/submit-form', {
    fetch('http://localhost:3500/api/submit-form', {
    method: 'POST',
    body: payload,
    mode: 'no-cors'
  })
    
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    resetFormAfterSubmission();
});












