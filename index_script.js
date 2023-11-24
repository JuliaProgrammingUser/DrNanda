


window.addEventListener("load", () => {
    const elem = document.getElementById("main");
    elem.classList.remove("Hello!");
  });

  setTimeout(function() {
    if (window.innerWidth <= 767) {
      window.location.href = "home.html"; // Redirect to home.html for mobile view
    }
    window.location.href = "home.html";
  }, 2500);