import copy from 'clipboard-copy';

function init() {
  let cta = document.querySelector(".cta");
  cta.addEventListener('click', function (e) {
    e.preventDefault();
    copy('hello@yacine.design');
    cta.classList.add('copied');
    cta.disabled = true;
    setTimeout(function () {
      cta.classList.remove('copied');
      console.log("class removed");
    }, 600);
  });
}

window.addEventListener('load', function () {
  document.querySelector('body').classList.remove("loading");
  init();
});