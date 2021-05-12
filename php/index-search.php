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
	 
	$value=$_REQUEST["val"];
	$currentPage = $_REQUEST["currentPage"];
	$perPage = $_REQUEST["perPage"];
	$sql = "select count(id) cou from index_page where desc1 like '%$value%' or brand like '%$value%' or price like '%$value%'";
    $result = $conn->query($sql);
    // var_dump($result);
    $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    $total= $row["cou"];  //得到总条数
	
	// echo $total;
    $sql = "select * from index_page where desc1 like '%$value%' or brand like '%$value%' or price like '%$value%' or search like '%$value%' limit ".($currentPage-1)*$perPage.",".$perPage;
    $result = $conn->query($sql);
	// var_dump($result);
	// echo $result->num_rows;
	if($result->num_rows > 0){
		

		while($row=mysqli_fetch_assoc($result)){
			$rows[] = $row;
		}

		$array = array("total"=>$total,"data"=>$rows);
		echo json_encode($array);
		// header("location:添加图书.html?json='$json'");
	}
	// 把得到的结果集转换为json
	


?>