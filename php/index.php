<?php
    // require "../inc/indexdbconn.php";
    // header("content-type:text/html;charset=utf8");
	$serverName = "localhost";
	$userName = "root";
	$pwd = "root";
	$dbName = "sephora";

	$conn = new mysqli($serverName,$userName,$pwd,$dbName);

	mysqli_set_charset($conn, "utf8");

	if($conn->connect_error){
		die("连接失败：".$conn->connect_error);
	}

    // header("content-type:text/html;charset=utf8");
    $id=$_REQUEST["id"];
    $sql="select * from index_page where id='$id'";
    $result =$conn->query($sql);
    // echo $result->num_rows;
    if($result->num_rows > 0){
		

		while($row=mysqli_fetch_assoc($result)){
			$rows[] = $row;
		}

		$json = json_encode($rows);
		echo $json;
		// header("location:添加图书.html?json='$json'");
	}

?>