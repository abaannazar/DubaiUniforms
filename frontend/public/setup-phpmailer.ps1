# Create PHPMailer directory if it doesn't exist
$PHPMailerDir = "PHPMailer"
if (!(Test-Path -Path $PHPMailerDir)) {
    New-Item -ItemType Directory -Path $PHPMailerDir
}

# Define the files to download
$files = @(
    @{
        Name = "PHPMailer.php"
        Url = "https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/PHPMailer.php"
    },
    @{
        Name = "SMTP.php"
        Url = "https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/SMTP.php"
    },
    @{
        Name = "Exception.php"
        Url = "https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/Exception.php"
    }
)

# Download each file
foreach ($file in $files) {
    $outputPath = Join-Path -Path $PHPMailerDir -ChildPath $file.Name
    Write-Host "Downloading $($file.Name)..."
    Invoke-WebRequest -Uri $file.Url -OutFile $outputPath
}

Write-Host "PHPMailer files have been downloaded successfully!"
