
function init() {
  // Spanify
  function spanify(selector) {
    const title = document.querySelector(selector);
    const elts = title.innerHTML.split(" ");


    title.innerHTML = elts
      .map(elt => elt.trim())
      .filter(elt => elt !== "")
      .map(elt => {
        const regexEnterTag = new RegExp("(<[^/].*>)(.*)", "g");
        const regexOuterTag = new RegExp("(.*)(</.*>)", "g");
        const resutRegexEnterTag = regexEnterTag.exec(elt);
        const resutRegexOuterTag = regexOuterTag.exec(elt);

        if (resutRegexEnterTag) {
          return `${resutRegexEnterTag[1]}<span>${resutRegexEnterTag[2]}</span>`;
        }

        if (resutRegexOuterTag) {
          return `<span>${resutRegexOuterTag[1]}</span>${resutRegexOuterTag[2]}`;
        }

        return `<span>${elt}</span>`;
      })
      .join(" ");
  }

  spanify(".title");



  let spans = document.querySelectorAll('.title span');
  let job = document.querySelectorAll('.job');

  // console.log(spans);
  spans.forEach(function (el, index) {
    el.classList.add('yo');
    el.style.animationDelay = `${index*35}ms`;
  })
}

window.addEventListener('load', function () {
  document.querySelector('body').classList.remove("loading");
  init();
});






/* 
let tl = new TimelineMax({ });

const animation_cfg = {
  ease: 'Power3.easeInOut'
}
tl
  .staggerFrom('.title span', .8, {
    rotationX: -120,
    scaleY: .5,
    y: 5,
    x: -5,
    autoAlpha: 0,
    transformOrigin: '50% 100%',
    ease: animation_cfg.ease
    // scale: 3
  }, .05)
  .add('title')
  .from('.job', .6, {
    autoAlpha: 0,
    rotationX: -45,
    scaleY: 0,
    y: 10,
    ease: animation_cfg.ease
  }, 'title-=.5')
 */
