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
	$name=$_POST["name"];
	$paw=$_POST["paw"];
	$sql = "insert into user_message (name,password) values('$name','$paw')";
	// echo $name.$paw;
	$result = $conn->query($sql);

	// echo $conn->query($sql);
	if($result){
		echo "注册成功";
		// header("location:index")
	}else{
		echo "注册失败";
	}

?>