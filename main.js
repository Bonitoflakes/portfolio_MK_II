const btn = document.querySelector("#dark");
// const bg_img = document.querySelector('.bg_img');
// // Listen for a click on the button
// btn.addEventListener("click", function() {
//   // Then toggle (add/remove) the .dark-theme class to the body
//   console.log('clicked the btn');
//   document.body.classList.toggle("dark-theme");
//   bg_img.classList.toggle("hidden");
// });

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : '');
});

if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.add('dark-theme');
}
