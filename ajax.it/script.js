// ajax(url, method, functionName, dataArray) {
// POST -> date = '2022-02-07'

let date = {'date': '2022-02-07'};

ajax('datetime.php', 'POST', showTime, date);

function showTime(data) {
  data = JSON.parse(data);
  console.log(data);
  alert(data.F);
}

//////////////////////////////////
// Example

document.querySelector('#button').onclick = function() {
  let input = document.querySelector('#inp-date');
  let date = {'date': input.value};
  ajax('datetime.php', 'POST', showTime, date);
};

function showTime(data) {
  data = JSON.parse(data);
  console.log(data);
  console.log(data.F);
}