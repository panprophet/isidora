<?php     
$to_email = 'isidora.buneta@gmail.com';
//$to_email = 'psihoterapeut@isidorabuneta.rs';
$subject = 'Contact from isidorabuneta.rs';
$message = 'Website kontakt formular: ' . "\r\n" .
'From: ' . $_POST['email'] . "\r\n" .
'Ime: ' . $_POST['name'] . "\r\n" .
'Naslov: ' . $_POST['title'] . "\r\n" .
'Message: ' . $_POST['message'] . "\r\n" ;

//$headers = 'info@isidorabuneta.rs';
$headers = 'From: psihoterapeut@isidorabuneta.rs' . "\r\n" .
    'Reply-To: ' . $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
echo mail($to_email,$subject,$message,$headers);
//echo 'ok?';
?>