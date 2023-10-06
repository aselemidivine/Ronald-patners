// const formVValue = document.querySelector('.form');

// //reset form value...
// const resetForm = () => {
//   formVValue.reset();
// };

// formVValue.addEventListener('submit', function(e) {
//   e.preventDefault();
//   //send request using urlencoded
//   const prePayload = new FormData(formVValue);
//   const payload = new URLSearchParams(prePayload);
//   console.log([...payload]);

//   //plug into the database .....
//   // replace url with your api url
//     // fetch('https://api.ronald-partners.net/api/submit-form', {
//     fetch('http://localhost:3500/api/submit-form', {
//     method: 'POST',
//     body: payload,
//      mode: 'no-cors'
//   })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//   resetForm();
// });

const formVValue = document.querySelector(".form");

formVValue.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Capture the selected image file from the input field
    const fileInput = document.querySelector("#documentOne");
    const imageFile = fileInput.files[0];

    // Upload the image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(imageFile);

    // Include the image URL in the form data
    const formData = new FormData(formVValue);
    // const prePayload = new FormData(formVValue);
    // const payload = new URLSearchParams(prePayload);
    // console.log([...payload]);
    // payload.append('image', imageUrl);
    formData.append("image", imageUrl);

    console.log(formData);
    // Send the form data as a POST request
    // Replace the API URL with your actual API endpoint
    fetch("http://localhost:3500/api/submit-form", {
      method: "POST",
      body: formData,
      mode: "cors",
      // mode: 'no-cors',
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded", // Set the content type
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resetForm();
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error("Error:", error);
  }
});

// Function to upload an image to Cloudinary
const uploadImageToCloudinary = async (file) => {
  const cloudinaryUploadUrl =
    "https://api.cloudinary.com/v1_1/dlvm6us0n/image/upload";
  const cloudinaryUploadPreset = "ml_default"; // Replace 'your-upload-preset' with your Cloudinary upload preset

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloudinaryUploadPreset);

  try {
    const response = await fetch(cloudinaryUploadUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.secure_url) {
      return data.secure_url; // Return the Cloudinary image URL
    } else {
      throw new Error("Image upload to Cloudinary failed");
    }
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

// Function to reset the form
const resetForm = () => {
  formVValue.reset();
};

// Function to alert when form have been submitted
var form = document.getElementById("form");

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

// MAIN CODE
//   const formDetails = document.querySelector('.form-value');

// //reset form value...
// const resetFormAfterSubmission = () => {
//   formDetails.reset();
// };

// formDetails.addEventListener('submit', function(e) {
//   e.preventDefault();
//   //send request using urlencoded
//   const prePayload = new FormData(formDetails);
//   const payload = new URLSearchParams(prePayload);
//   console.log([...payload]);

//   //plug into the database .....
//   // replace url with your api url
//   // fetch('https://wild-blue-salmon-vest.cyclic.app/api/submit-form', {
//     // fetch('https://api.ronald-partners.net/api/submit-form', {
//     fetch('http://localhost:3500/api/submit-form', {
//     method: 'POST',
//     body: payload,
//     mode: 'no-cors'
//   })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//     resetFormAfterSubmission();
// });
