var rectangle = document.getElementById('rectangle');

document.getElementById('slide-up').addEventListener('click', function (e) {
  rectangle.classList.remove('down');
})
document.getElementById('slide-down').addEventListener('click', function (e) {
  rectangle.classList.add('down');
})
