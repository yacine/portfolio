import copy from 'clipboard-copy';


function init() {
  let cta = document.querySelector(".cta");
  cta.addEventListener('click', function (e) {
    e.preventDefault();
    copy('hello@yacine.design');
  });
}





window.addEventListener('load', function () {
  document.querySelector('body').classList.remove("loading");
  init();
});


