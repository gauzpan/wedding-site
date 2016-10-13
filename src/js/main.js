// document ready
$(function() {
    // Photos Slideshot
    // Groomsmen Slideshow
    $(".slideshow").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        paginationNumbers : true,
        responsive : true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $(document).find('.footer_logo').hide();
});
