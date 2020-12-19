const btn = document.querySelector("#dark");
// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  console.log('clicked the btn');
  document.body.classList.toggle("dark-theme");
});

alert
