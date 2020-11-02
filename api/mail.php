<?php     
$to_email = 'vujovichigor@gmail.com';
//$to_email = 'psihoterapeut@isidorabuneta.rs';
$subject = 'Contact from isidorabuneta.rs';
$message = 'Website kontaktformular: ' . "\r\n" .
'From: ' . $_POST['email'] . "\r\n" .
'Ime: ' . $_POST['ime'] . "\r\n" .
'Naslov: ' . $_POST['naslov'] . "\r\n" .
'Message: ' . $_POST['message'] . "\r\n" .

$_POST['message'];
//$headers = 'info@isidorabuneta.rs';
$headers = 'Reply-To: ' . $_POST['email'] . "\r\n";
echo mail($to_email,$subject,$message,$headers);
?>