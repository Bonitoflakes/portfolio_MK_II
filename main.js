const btn = document.querySelector(".btn-toggle");
// Listen for a click on the button
btn.addEventListener("click", function() {
    getComputedStyle(document.documentElement)
    .getPropertyValue('--bg-color');
    getComputedStyle(document.documentElement)
    .getPropertyValue('--color');
    document.documentElement.style
    .setProperty('--bg-color', 'pink');
    document.documentElement.style
    .setProperty('--color', 'pink');
});


