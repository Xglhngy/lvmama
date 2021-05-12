<?php
header("content-type:text/html;charset=utf8");
$serverName = "localhost";
$userName = "root";
$passWord = "root";
$dbName = "sephora";

$conn = new mysqli($serverName,$userName,$passWord,$dbName);
mysqli_set_charset($conn,"utf8");
if($conn->connect_error){
    die("连接失败：".$conn->connect_error);
}

?>