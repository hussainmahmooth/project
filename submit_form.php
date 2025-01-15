<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Here you can process the form data, such as saving it in a database or sending an email.

    echo "Thank you, $name! Your message has been received.";
} else {
    echo "Please submit the form first.";
}
?>
