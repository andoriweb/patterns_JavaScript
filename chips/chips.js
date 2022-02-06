
// Create element
function chips(message, timeRemove = 3000) {
  let chips = document.createElement('div');
  chips.classList.add('chips');
  chips.innerHTML = message;
  // console.log(chips);
  // document.querySelector('body').appendChild(chips);
  // chips исчезает
  addChips(chips);
  setTimeout(function() {deleteChips(chips);}, timeRemove);
}
// chips('Hello');

// Запускать функцию с атрибутами
document.querySelector('button').onclick = function() {
  chips('Hello', 5000);
};

// Удаление chips  и .chips-field
function deleteChips(chips) {
  chips.remove();
  let allChips = document.querySelectorAll('.chips-field .chips');
  if (allChips.length == 0) {
    document.querySelector('.chips-field').remove();
  }
}

// Создаём поле чипсов
function addChips(chips) {
  let chipsField = document.querySelector('.chips-field');
  if (chipsField) {
    chipsField.appendChild(chips);
  }else{
    let chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    document.querySelector('body').appendChild(chipsField);
    chipsField.appendChild(chips);
  }
  // console.log(chipsField);
}
