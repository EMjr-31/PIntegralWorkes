<?php

$name = $_POST['Name'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];
$message = $_POST['Message'];
$square = $_POST['Square'];
$attach = $_FILES['Attach']

if($name=='' $phone=='' || $email=='' || $message=='' || $attach=='' || $square==''){

echo "<script>alert ('Los campos mrcados con * son obligatorios');location.href = 'javascript:history.back()';</script>";

}else{
    require("archivosformulario/phpmailer.php");
    $mail = new PHPMailer();
    $mail->From = $email;
    $mail->FromName = $name;
    $mail->AddAddress("empleo@grupointegral.com.sv");


    $mail->WordWrap = 50;
    $mail->IsHTML(true);
    $mail->Square = "Square";
    $mail->Body = "Name: $name \n <br>" . "Phone: $phone \n <br>" 
    . "Email: $email \n <br>" 
    . "Square: $square \n <br>" 
    . "Message: $message \n <br>";
    $mail->AddAttachment($attach['tmp_name'], $attach['name']);


    $mail->IsSMTP();
    $mail->Host = "";
    $mail->SMTPAuth = true;
    $mail->Username = "";
    $mail->Password = "";

    if($mail->Send()){
        echo "<script>alert('Formulario enviado exitosamente');location.href ="
    }

}

?>