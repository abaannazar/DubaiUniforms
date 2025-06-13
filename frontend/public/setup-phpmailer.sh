#!/bin/bash

# Create PHPMailer directory
mkdir -p PHPMailer

# Download PHPMailer files
curl -o PHPMailer/PHPMailer.php https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/PHPMailer.php
curl -o PHPMailer/SMTP.php https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/SMTP.php
curl -o PHPMailer/Exception.php https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/Exception.php
