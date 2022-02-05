function getLocation () {
  navigator.geolocation.getCurrentPosition(showCoordinat, showError);
}

function showCoordinat (position) {
  document.write('Широта :' + position.coords.latitude + '<br>');
  document.write('Долгота :' + position.coords.longitude + '<br>');
  document.write('Точность :' + position.coords.accuracy);
}

function showError (error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert ('Пользователь запретил считывать информацию о его местонахождении.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert ('Браузер не может определить местонахождение.');
      break;
    case error.TIMEOUT:
      alert ('Браузер не успел определить местонахождение.');
      break;
    case error.UNKNOWN_ERROR:
      alert ('Произошла неопределённая ошибка.');
      break;
  }
}

getLocation ();