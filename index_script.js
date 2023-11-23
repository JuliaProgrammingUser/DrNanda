const helloText = document.getElementById('helloText');
const texts = ['Hello!', 'नमस्ते!', 'नमस्कार!'];
let index = 0;

setInterval(() => {
  helloText.textContent = texts[index];
  index = (index + 1) % texts.length;
}, 2000);


window.addEventListener("load", () => {
    const elem = document.getElementById("main");
    elem.classList.remove("loading");
  });
  