document.getElementById("wa-chat").addEventListener("click", function (e) {
    e.preventDefault();
    const message = "Hi, I'm interested in donating or learning more.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917086667640";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(url, "_blank");
});