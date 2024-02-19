
$("#contact-modal").modal("hide");

// Function to reset the form to its original state
function resetForm() {
    $("#contact-form")[0].reset(); // Reset the form
    $("#contact-btn").text("Submit"); // Reset button text
}

// Function to show the thank you modal
function showThankYouModal() {
    $("#contact-modal").modal("show");
}

// Function to show the thank you message in the modal
function showThankYou() {
    let thankyouMessage = `
        <h2>YOUR MESSAGE HAS BEEN SENT</h2>
        <br>
        <p>Thank you for the Feedback | Message<br>
        I appreciate your contribution and will be in touch if required.
        <br>Have a good day! 🤗</p>`;
    $('.thank-you-message').html(thankyouMessage);
}

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
                showThankYou(); // Corrected function name
                $("#contact-modal").modal("show"); // Show the modal
            },
            function (error) {
                console.log("FAILED", error);
                // Handle error if needed
                $("#contact-btn").text("Submit"); // Reset button text in case of failure
            }
        );
    return false;
}

// form
const originalFormContent = $("#contact-form").html();

$("#contact-form").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission
    sendEmail(this);
});

// Your existing code for the close button remains unchanged
$(".btn-close").click(function () {
    $("#contact-modal").modal("hide");
    resetForm();
});
