<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);

    // Set Telegram bot token and group chat ID
    $botToken = "6982430490:AAE8q5ZODHH0V0Ws5PS3opnHoqj55JLJlRQ";
    $groupChatID = "-1001990263531"; // Replace with your actual group chat username or ID

    // Build the Telegram message
    $telegramMessage = "New Contact Form Submission\n";
    $telegramMessage .= "Name: $name\n";
    $telegramMessage .= "Email: $email\n";
    $telegramMessage .= "Message:\n$message";

    // Telegram API URL
    $telegramApiUrl = "https://api.telegram.org/bot$botToken/sendMessage";

    // Set Telegram POST data
    $postData = [
        "chat_id" => $groupChatID,
        "text" => $telegramMessage,
        "parse_mode" => "HTML", // You can adjust this based on your message format
    ];

    // Initialize cURL session
    $ch = curl_init($telegramApiUrl);

    // Set cURL options
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL session
    $response = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    // Output response (for testing purposes)
    echo $response;
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}

// Function to sanitize form data
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
