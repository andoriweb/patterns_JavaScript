<?php
require_once 'config.php';

// Обрезаем пробелы до и после
$name = trim($_POST['name']);
$pass = trim($_POST['pass']);
$email = trim($_POST['email']);
$birthday = trim($_POST['birthday']);
$sex = trim($_POST['sex']);

// ПРоверка: если поле пустое -> код 2 и остановка скрипта
if ($name =='' OR $pass=='' OR $email=='' OR $birthday=='' OR $sex ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password, birthday, sex) VALUES ('".$name."', '".$email."', '".$pass."', '".$birthday."', '".$sex."')";

// ПРоверка: если ok -> код 1 и запись в базу
if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    // ПРоверка: если записались не корректно -> error
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>