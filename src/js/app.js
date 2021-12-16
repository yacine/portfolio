import copy from 'clipboard-copy';

function init() {
  let cta = document.querySelector(".cta"),
  email = document.querySelector(".cta").textContent;
  cta.addEventListener('click', function (e) {
    e.preventDefault();
    copy(email);
    cta.classList.add('copied');
    cta.textContent = "Email copied 👌"
    cta.disabled = true;
    setTimeout(function () {
      cta.classList.remove('copied');
      console.log("class removed");
      cta.textContent = email;
    }, 600);
  });
}

window.addEventListener('load', function () {
  document.querySelector('body').classList.remove("loading");
  document.querySelector('body').classList.add('loaded');
  init();
});