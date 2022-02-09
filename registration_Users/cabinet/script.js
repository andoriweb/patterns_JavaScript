// Registration Users

document.querySelector('#signup-submit').onclick = function(event) {
  event.preventDefault();

  let name = document.querySelector('#signup-name').value;
  let pass = document.querySelector('#signup-pass').value;
  let email = document.querySelector('#signup-email').value;
  let birthday = document.querySelector('#signup-birthday').value;
  let sex = document.querySelectorAll('.sex');
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      sex = sex[i].value;
      break;
    }
  }

  // Создаём массив данных
  let data = {
    'name': name,
    'pass': pass,
    'email': email,
    'birthday': birthday,
    'sex': sex
  };
  
  // Вызываем Ajax запрос
  ajax('core/signup.php', 'POST', signup, data);
  
  function signup (result) {
    console.log(result);
    if (result == 2) {
      alert('Заполните ВСЕ поля!');
    }
    else if (result == 1) {
      alert('Регистрация прошла успешно');
    }
    else {
      alert('Ошибка! Повторите снова');
    }
  }
};


// Ligin Users

document.querySelector('#login-submit').onclick = function(event) {
  event.preventDefault();

  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;

  // Создаём массив данных
  let data = {
    'pass': pass,
    'email': email
  };
  
  // Вызываем Ajax запрос
  ajax('core/login.php', 'POST', login, data);
  
  function login (result) {
    console.log(result);
    if (result == 2) {
      alert('Заполните ВСЕ поля!');
    }
    else if (result == 0) {
      alert('Такой пользователь не найден');
    }
    else {
      console.log(result);
      // Распарсить возвращаемую строку
      result = JSON.parse(result);
      // Устанавливаем cookie и настраиваем время
      var d = new Date();
      // d.setTime(d.getTime() + (exdays*24*60*60*1000)); // 24 h
      d.setTime(d.getTime() + (60 * 1000)); // 1min
      var expires = d.toUTCString();
      document.cookie = `email=${result.email}; expires=${expires}; path=/`;
      // Перенаправляем в кабинет
      location.href = "cabinet.php";
    }
  }
};