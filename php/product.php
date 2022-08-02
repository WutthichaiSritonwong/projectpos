<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{

$request = json_decode($postdata);
$product_name = trim($request->product_id);
$product_id = trim($request->product_id);
// $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
// $email = mysqli_real_escape_string($mysqli, trim($request->email));
// $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
$sql = "SELECT * FROM products where product_id='$product_id'";

if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
