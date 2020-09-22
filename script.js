var rectangle = document.getElementById('rectangle');

document.getElementById('slide-up').addEventListener('click', function (e) {
  rectangle.classList.remove('down');
})
document.getElementById('slide-down').addEventListener('click', function (e) {
  rectangle.classList.add('down');
})


/*** Rolling Notice ***/

var rollingNotice = document.getElementById('rollingNotice');
var notice = rollingNotice.querySelector('.notice');
var activeNoticeIndex = 0;

setupAnimation(notice);
addNoticeClassOn();

function addNoticeClassOn() {
  var notices = ["Notice1", "Notice2", "Notice3", "Notice4", "Notice5"];

  if (activeNoticeIndex >= notices.length) {
    activeNoticeIndex = 0;
  }

  notice.classList.add('on');
  notice.textContent = notices[activeNoticeIndex++];
}

function listener(e) {
  if (e.type === "animationend") {
    e.target.classList.remove('on');
    e.target.offsetHeight;// force repaint to recognize `animation-name: none;`
    addNoticeClassOn();
  }
}

function setupAnimation(elem) {
  var e = elem;

  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);
}