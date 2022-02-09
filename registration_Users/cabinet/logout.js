document.querySelector('#logout').onclick = function() {

  // Обнуляем cookies
  let c = document.cookie;
  // console.log(c);
  
  let d = new Date();
  d.setTime(d.getTime() - (10 * 60 * 1000));
  let expires = d.toUTCString();
  document.cookie = `email=${c}; expires=${expires}; path=/`;
  
  // Перезагружаем страницу
  location.reload();
  
};