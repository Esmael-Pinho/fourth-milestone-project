/*jshint esversion: 6 */

$(".thank-you-container.modal").hide();

// close after pressing X (close) button
$(".btn-close").click(function () {
    $(".thank-you-container.modal").hide();
    resetForm();
});

// Function to reset the form to its original state
function resetForm() {
    $("#contact-form")[0].reset(); // Reset the form
    $("#contact-btn").text("Submit"); // Reset button text
}

// Function to show the thank you modal
function showThankYouModal() {
    $(".thank-you-container.modal").show();
    // showThankYou();
}

// Function to show form again after close-btn clicked
function showForm() {
    $(".btn-close").click(function () {
        $("#contact-form").html(originalFormContent);
    });
}

// form
const originalFormContent = $("#contact-form").html();
showForm();

function sendEmail(contactForm) {
    $("#contact-btn").text("Sending..."); // Change button text
    emailjs.send("gmail", "pinho", {
        "from_email": contactForm.email.value,
        "from_name": contactForm.name.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                $("#contact-btn").text("Msg Sent");
                resetForm();
                showThankYouModal();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}

// message to display after Feedback/Message sent
function showThankYou() {
    let thankyouMessage = `
        <h2>YOUR MESSAGE HAS BEEN SENT</h2>
        <br>
        <p>Thank you for the Feedback | Message<br>
        I appreciate your contribution and will be in touch if required.
        <br>Have a good day! 🤗</p>`;
    $('.thank-you-message').html(thankyouMessage);
}
