
const formValue = document.getElementById('form');

//reset form value...
const resetForm = () => {
  formValue.reset();
};

formValue.addEventListener('submit', function(e) {
  e.preventDefault();
  //send request using urlencoded
  const prePayload = new FormData(formValue);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);

  //plug into the database .....  
  // replace url with your api url
  // fetch('http://localhost:3000/api/submit-form', {
  fetch('https://wild-blue-salmon-vest.cyclic.app/api/submit-form', {
    method: 'POST',
    body: payload,
    mode: 'cors'
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    resetForm();
});


// TO TOP MENU 

const toTop = document.querySelector (".to-top");
window.addEventListener("scroll", () => {
    if  (window.pageYOffset > 100)  {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove ("active");
    }
})
// });




