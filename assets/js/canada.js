const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  //send request using urlencoded
  const prePayload = new FormData(myForm);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);

  //plug into the database .....  
  // replace url with your api url
  fetch('url', {
    method: 'POST',
    body: payload,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
});
