$(document).ready(function() {

    $('#sort-selector').change(function() {
        var selector = $(this);
        var currentUrl = new URL(window.location);

        var selectedVal = selector.val();
        if(selectedVal != "reset"){
            var sort = selectedVal.split("_")[0];
            var direction = selectedVal.split("_")[1];

            currentUrl.searchParams.set("sort", sort);
            currentUrl.searchParams.set("direction", direction);

            window.location.replace(currentUrl);
        } else {
            currentUrl.searchParams.delete("sort");
            currentUrl.searchParams.delete("direction");

            window.location.replace(currentUrl);
        }
    })

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
