<?php
    
    
   
    // Database connection
	$conn =  mysqli_connect('localhost','root',' ','db2021');
	$motor1 = $_POST['motor1'];
    $motor2 = $_POST['motor2'];
    $motor3 = $_POST['motor3'];
    $motor4 = $_POST['motor4'];
    $motor5 = $_POST['motor5'];
    $motor6 = $_POST['motor6'];
	if(mysqli_connect_error()){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into arm(motor1, motor2, motor3, motor4, motor5, motor6) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("iiiiii", $motor1, $motor2, $motor3, $motor4, $motor5, $motor6);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();

    }
?>