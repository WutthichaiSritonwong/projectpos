<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET");

// include_once("database.php");
// $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata))
// {

// $request = json_decode($postdata);
// // $product_name = trim($request->product_name);
// $product_id = trim($request->product_id);
// echo $product_id;
// // $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
// // $email = mysqli_real_escape_string($mysqli, trim($request->email));
// // $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
// $sql = "SELECT * FROM products where product_id='$product_id'";

// if($result = mysqli_query($mysqli,$sql))
// {
// $rows = array();
// while($row = mysqli_fetch_assoc($result))
// {
// $rows[] = $row;
// }
// echo json_encode($rows);
// }
// else
// {
// http_response_code(404);
// }
// }


include_once("database.php");
// require 'database.php';
// $postdata = file_get_contents("php://input");
// echo $postdata;

// if (isset($_POST)) {
//     $post = $_POST['id'];
//     $sql = "SELECT * FROM products where product_id='$post'";
//     if ($result = mysqli_query($mysqli, $sql)) {
//         $rows = array();
//         while ($row = mysqli_fetch_assoc($result)) {
//             $rows[] = $row;
//         }
//         echo json_encode($rows);
//     }
// }


$json = file_get_contents('php://input');
// Converts it into a PHP object 
$data = json_decode($json, true);
$id = $data['id'];
$sql = "SELECT * FROM products where product_id='$id'";
    if ($result = mysqli_query($mysqli, $sql)) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    }

// $json = file_get_contents('php://input');
// echo $postdata;
// echo $json;
// echo '';
// if(isset($postdata) && !empty($postdata))
// {
//     $request = json_decode($postdata);
//     echo $request;
//     $product_id = trim($request->product_id);
// }
// $request = json_decode($postdata);
// echo $request;

// $array = json_decode($json, true);
// echo $array;

// $sql = "SELECT * FROM products where product_id='$array'";
// if ($result = mysqli_query($mysqli, $sql)) {
//     $rows = array();
//     while ($row = mysqli_fetch_assoc($result)) {
//         $rows[] = $row;
//     }
//     echo json_encode($rows);
// }
