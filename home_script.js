

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});



window.addEventListener('resize', function() {
  const divA = document.querySelector('.outerdiv');
  
  if (window.innerWidth <= 768) {
    divA.style.display = 'none';
  }
});
