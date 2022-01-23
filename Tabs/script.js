let tabBlock = document.querySelectorAll('.tab-block');
let tabTitle = document.querySelectorAll('.tab-title li');

// Скрываем все таб блоки кроме Первого
for (let i = 1; i < tabBlock.length; i++) {
  tabBlock[i].style.display = 'none';
}

tabTitle.forEach(function(element) {
  element.onclick = showTab;
});

function showTab() {
  // Получаем элемент по Атрибуту
  let dataTab = this.getAttribute('data-tab');

  // Скрываем все таб блоки
  for (let i = 0; i < tabBlock.length; i++) {
    tabBlock[i].style.display = 'none';
  }
  // Находим элемент с нужным атрибутом
  document.querySelector(`.tab-block[data-tab="${dataTab}"]`).style.display = 'block';
}
