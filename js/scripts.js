$(document).ready(function () {
  $(".button-collapse").sideNav();
});

$(document).ready(function () {
  $('.parallax').parallax();
});

function showEmailInput() {
  let email = document.getElementById('email');
  let subscribeButton = document.querySelector('.button');
  let submitButton = document.querySelector('.submit');
  email.classList.remove('hide');
  subscribeButton.classList.add('hide');
  submitButton.classList.remove('hide');
}