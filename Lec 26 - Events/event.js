// * Add event lister

// * Types, timestamp, default prevented
// * target, toElement , source element,current target
// * clinetX, clientY, screenX, screenY
// * altkey, ctrkey, esckey, shiftkey, keycode

// ? Event Propogation: true and false
// * true: capturingMode - top se bottom
// * false: bubblingUp - niche se upar jata hai

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log('clicked inside the url')
// }, true)

// document.getElementById('paint').addEventListener('click', function(e) {
//     e.stopPropagation()
//     console.log('Paint clicked')
// }, true)

// document.getElementById('google').addEventListener('click', function(e) {

//     e.preventDefault()
//     e.stopPropagation()
//     console.log('google clicked')

// }

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id)
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }

  // removeIt.parentNode.removeChild(removeIt)
});
