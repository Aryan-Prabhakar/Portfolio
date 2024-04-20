<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ak2915285@gmail.com";
    $subject = $_POST['Subject'];
    $message = "Name: " . $_POST['Name'] . "\n";
    $message .= "Email: " . $_POST['Email'] . "\n";
    $message .= "Mobile Number: " . $_POST['Mobile Number'] . "\n";
    $message .= "Message: " . $_POST['Message'];

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the page after sending email
    header("Location: " . $_SERVER['REQUEST_URI'] . "?status=success");
    exit;
}
?>
