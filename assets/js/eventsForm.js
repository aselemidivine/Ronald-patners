const formVValue = document.querySelector('.formm');

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
    // fetch('https://api.ronald-partners.net/api/submit-form', {
    fetch('http://localhost:3500/api/events-form', {
    method: 'POST',
    body: payload,
     mode: 'no-cors'
  })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  resetForm();
});