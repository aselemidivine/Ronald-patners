// document.getElementById("showRandomAlert").addEventListener("click", function() {
//   const alerts = [
//     { title: "Success!", text: "Operation completed successfully.", icon: "success" },
//     { title: "Error!", text: "An error occurred.", icon: "error" },
//     { title: "Warning!", text: "Please proceed with caution.", icon: "warning" },
//     { title: "Info!", text: "Here's some important information.", icon: "info" },
//   ];

//   const randomIndex = Math.floor(Math.random() * alerts.length);
//   const randomAlert = alerts[randomIndex];

//   Swal.fire({
//     title: randomAlert.title,
//     text: randomAlert.text,
//     icon: randomAlert.icon,
//     confirmButtonText: "OK"
//   });
// });


// document.getElementById("showRandomAlert").addEventListener("click", function() {
//     const alerts = [
//       { title: "Success!", text: "Operation completed successfully.", icon: "success" },
//       { title: "Error!", text: "An error occurred.", icon: "error" },
//     ];
  
//     const randomIndex = Math.floor(Math.random() * alerts.length);
//     const randomAlert = alerts[randomIndex];
  
//     const toast = Swal.mixin({
//       toast: true,
//       position: "top-end",
//       showConfirmButton: false,
//       timer: 10000 // Adjust the duration in milliseconds (e.g., 5000ms = 5 seconds)
//     });
  
//     toast.fire({
//       icon: randomAlert.icon,
//       title: randomAlert.title,
//       text: randomAlert.text
//     });
//   });



document.getElementById('sweetalert').addEventListener('click', function() {
    Swal.fire('Thank You. We will get back to you soon!');
})