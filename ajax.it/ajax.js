// XMLHttpRequest

function ajax(url, method, functionName, dataArray) {
  // Создать запрос
  let xhttp = new XMLHttpRequest();
  // Открыть соединение
  xhttp.open(method, url, true);
  // Установить заголовки
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // Инициализировать и Послать запрос
  xhttp.send(requestData(dataArray));

  // Если сервер ответил, проверяем
  xhttp.onreadystatechange = function(){
    // Состояние ответа и Статус
    if (this.readyState == 4 && this.status == 200) {
      functionName(this.response);
    }
  };
}

// Массив данных приводим к Строке
function requestData(dataArr) {
  let out = '';
  for (let key in dataArr) {
    out += `${key}=${dataArr[key]}&`;
  }
  console.log(out);
  return out;
}