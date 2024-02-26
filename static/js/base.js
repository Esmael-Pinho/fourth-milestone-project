/*jshint esversion: 6 */
$(document).ready(function() {

    $('.toast-container').toast('show');

    // Click event for the "Search" link
    $(".list-inline-item.search-btn ").on("click", function(e) {
        // Toggle the collapse class on the navbar
        $(".navbar-nav").toggleClass("d-none");

        // Toggle the collapse class on the search bar
        $("#search-bar").toggleClass("collapse");

        // Toggle the 'aria-expanded' attribute
        $(this).attr("aria-expanded", function (i, attr) {
            return attr === "true" ? "false" : "true";
        });
    });


    // Set the date we're counting down to
    var countDownDate = new Date("Mar 31, 2024 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Update each countdown div with its corresponding values
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $("#days, #hours, #minutes, #seconds").html("Free delivery for all orders in effect");
    }
    }, 1000);


     // Initially hide the scroll-up button
    $('#scrollUp').hide();

     // Show/hide the button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { 
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

     // Smooth scrolling when clicking on the button
    $('#scrollUp').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    
    
});