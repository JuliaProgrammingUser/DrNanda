function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "hexronus@gmail.com",
        Password : "La Voiture Noire",
        To : 'hexronus@gmail.com',
        From : document.getElementById("email").value,
        Body : document.getElementById("textarea").value,
    }).then(
      message => alert(message)
    );
}