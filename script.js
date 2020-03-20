var toggleTheme = function () {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark-theme', document.body.classList.contains('dark'));
};
var toggleLightroom = function (event) {
  if (event.target.className === 'lightroom') {
    event.target.classList.remove('lightroom');
    return;
  }
  if (!event.target.parentElement.parentElement.classList.contains('image-card')) {
    return;
  }
  if (!event.target.parentElement.classList.contains('lightroom')) {
    event.target.parentElement.classList.add('lightroom');
    return;
  }
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('works').addEventListener('click', function(event) { toggleLightroom(event); });

if (JSON.parse(localStorage.getItem('dark-theme'))) {
  document.body.classList.add('dark');
}
