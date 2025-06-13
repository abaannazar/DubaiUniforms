<?php
// Include PHPMailer classes
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// CORS Headers
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Extract form data
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $company = $data['company'] ?? '';
    $category = $data['category'] ?? '';
    $message = $data['message'] ?? '';

    // Email settings
    $to = 'leads@dubaiuniform.com';
    $from = 'leadsdubaiuniforms@gmail.com';
    $appPassword = 'nwnn hqts uqhj cqip'; // 16-char app password

    $subject = "New Contact Form Submission - Dubai Uniforms";

    // HTML email body
    $emailBody =  "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 30px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border: 1px solid #dddddd;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            }
            h2 {
                text-align: center;
                color: #333333;
                margin-bottom: 30px;
            }
            .field {
                margin-bottom: 20px;
                padding: 10px;
                border-bottom: 1px solid #eeeeee;
            }
            .label {
                font-weight: bold;
                color: #555555;
                margin-bottom: 5px;
            }
            .value {
                color: #333333;
                font-size: 15px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>New Contact Form Submission</h2>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>" . htmlspecialchars($email) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>" . htmlspecialchars($phone) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>" . htmlspecialchars($company) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Category:</div>
                <div class='value'>" . htmlspecialchars($category) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
    </body>
    </html>
    ";

    // PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $from;
        $mail->Password = $appPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($from, 'Dubai Uniforms');
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $emailBody;

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
