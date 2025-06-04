<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this path is correct

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['email'])) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; // e.g. mail.dubaiuniformscraft.com
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreplay@dubaiuniform.com';
    $mail->Password   = 'Abaan@2006';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($data['email'], $data['name']);
    $mail->addAddress('leads@dubaiuniform.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry';
    $mail->Body    = "
        <strong>Name:</strong> {$data['name']}<br>
        <strong>Email:</strong> {$data['email']}<br>
        <strong>Phone:</strong> {$data['phone']}<br>
        <strong>Company:</strong> {$data['company']}<br>
        <strong>Category:</strong> {$data['category']}<br>
        <strong>Message:</strong><br>{$data['message']}
    ";

    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo]);
}
?>
