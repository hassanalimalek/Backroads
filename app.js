// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav_toggle");
const links = document.getElementById("nav_links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("nav_show");
});

