function Contact() {
  var phone = prompt("Enter your numberphone(11): ");
  if (phone.length == 11) {
    alert("we will messing for you soon, please enter OPT right here: ");
  } else {
    alert("Number does not exist");
  }
}
document.querySelector(".hire").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });
