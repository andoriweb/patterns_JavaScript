document.querySelector('#more').onclick = function() {
  document.querySelector('.pages').style.marginLeft = '-300px';
}

document.querySelectorAll('.back').forEach(function(element) {
  element.onclick = goBack;
});

function goBack() {
  document.querySelector('.pages').style.marginLeft = '0px';
}
