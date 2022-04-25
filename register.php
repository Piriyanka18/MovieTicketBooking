<?php

$uname1 = $_POST['uname1'];
$upswd1 = $_POST['upswd1'];
$cupswd = $_POST['cupswd'];
$housenumber = $_POST['housenumber'];
$postalcode = $_POST['postalcode'];
$province= $_POST['province'];
$city= $_POST['city'];
$country = $_POST['country'];
$telnumber = $_POST['telnumber'];
$mobnumber = $_POST['mobnumber'];
$website = $_POST['website'];
$email = $_POST['email'];
$facebook = $_POST['facebook'];
$remark = $_POST['remark'];



if (!empty($uname1) || !empty($upswd1) || !empty($cupswd) || !empty($housenumber)
 || !empty($postalcode)
|| !empty($province) || !empty($city) || !empty($country) || !empty($telnumber) 
|| !empty($mobnumber) || !empty($website)
|| !empty($email) || !empty($facebook) || !empty($remark))
{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "movie";



// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT email From register Where email = ? Limit 1";
  $INSERT = "INSERT Into register (uname1 ,upswd1, cupswd,housenumber, postalcode,
              province,city,country,telnumber,mobnumber,website,email,facebook,remark)
              values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssssssssiissss", $uname1,$upswd1,$cupswd,$housenumber,
                         $postalcode,$province,$city,$country,
                         $telnumber,$mobnumber,$website,$email,
                         $facebook,$remark);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>