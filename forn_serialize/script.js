const selectValue = document.querySelector('#select');
selectValue.onchange = function() {
  console.log(selectValue.value);
};

//////////////////////////////
///////   Send Form   ///////

document.querySelector('#send').onclick = function(event) {
  // cancel reboot
  event.preventDefault();
  console.log('work');
  console.log(serialize(document.querySelector('form')));
};