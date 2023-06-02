
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
  fetch('http://localhost:3000/api/submit-form', {
    method: 'POST',
    body: payload,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  resetForm();
});
