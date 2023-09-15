function redirectToWhatsApp() {
    // Get the values from the text boxes
    var phoneNumber = document.getElementById("phoneNumber").value;
    var message = document.getElementById("message").value;

    // Encode the message for a URL
    var encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    var whatsappURL = "https://api.whatsapp.com/send/?phone="+phoneNumber+"&text="+encodedMessage+"&type=phone_number&app_absent=0" ;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}
