const helloText = document.getElementById('helloText');
let index = 0;

setInterval(() => {
  helloText.textContent = texts[index];
  index = (index + 1) % texts.length;
}, 1500);


window.addEventListener("load", () => {
    const elem = document.getElementById("main");
    elem.classList.remove("Hello!");
  });

  setTimeout(function() {
    window.location.href = "home.html"; // Replace with your desired URL
}, 2500);
