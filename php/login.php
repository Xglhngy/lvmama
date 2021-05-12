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
	// echo "连接成功!";
	$name=$_REQUEST["user"];
	$paw=$_REQUEST["pwd"];
	$sql = "select * from user_message where name='$name' and password='$paw'";
	$result = $conn->query($sql);
	// setcookie("name",$name);
	// setcookie("paw", md5($paw));
	// echo $result;
	// echo $name.$paw;
	if($result->num_rows == 1){
		// if(isset($_REQUEST["auto"])){
		// 	$auto = $_REQUEST["auto"];
		// 	setcookie("name",$name,time()+7*24*60*60);
		// 	setcookie("paw", md5($paw),time()+7*24*60*60);
		// }else{
		// 	setcookie("name",$name);
		// 	setcookie("paw", md5($paw));
		// }
		
		echo "通过";
	}else if($result->num_rows == 0){
		echo "该账号不存在";
	}
	


?>