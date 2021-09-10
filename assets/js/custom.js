$(document).ready(function (e) {
    $("#next-1").click(function (e) {
        $(".contact-info").hide();
        $(".project-info").show();
        e.preventDefault();
    });

    $("#prev-1").click(function (e) {
        $(".project-info").hide();
        $(".contact-info").show();
        e.preventDefault();
    });

    $(".more-info input").click(function () {
        $(".search-project").hide();
        // e.preventDefault();
    });

    $(".ac-more-info input").click(function () {
        $(".ac-search-project").hide();
        // e.preventDefault();
    });

    $("#next-2").click(function (e) {
        $(".project-info").hide();
        $(".your_msg").show();
        e.preventDefault();
    });

    $("#prev-2").click(function (e) {
        $(".your_msg").hide();
        $(".project-info").show();
        e.preventDefault();
    });

    $("#next-3").click(function (e) {
        $(".acadmic_info").hide();
        $(".aca-contact-info").show();
        e.preventDefault();
    });

    $("#next-4").click(function (e) {
        $(".aca-contact-info").hide();
        $(".ac-project-info").show();
        e.preventDefault();
    });

    $("#prev-4").click(function (e) {
        $(".ac-project-info ").hide();
        $(".aca-contact-info").show();
        e.preventDefault();
    });

    $("#next-5").click(function (e) {
        $(".ac-project-info").hide();
        $(".ac-your_msg").show();
        e.preventDefault();
    });

    $("#prev-5").click(function (e) {
        $(".ac-your_msg").hide();
        $(".ac-project-info").show();
        e.preventDefault();
    });

    $("#next-6").click(function (e) {
        $(".career_info").hide();
        $(".career-contact-info").show();
        e.preventDefault();
    });

    $("#next-7").click(function (e) {
        $(".career-contact-info").hide();
        $(".career-job").show();
        e.preventDefault();
    });

    $("#prev-7").click(function (e) {
        $(".career-job").hide();
        $(".career-contact-info").show();
        e.preventDefault();
    });

    $("#next-8").click(function (e) {
        $(".career-job").hide();
        $(".career-your_msg").show();
        e.preventDefault();
    });

    $("#prev-8").click(function (e) {
        $(".career-your_msg").hide();
        $(".career-job").show();
        e.preventDefault();
    });

    $("#next-9").click(function (e) {
        $(".inquery-contact-info").hide();
        $(".inquery-your_msg").show();
        e.preventDefault();
    });

    $("#prev-9").click(function (e) {
        $(".inquery-your_msg").hide();
        $(".inquery-contact-info").show();
        e.preventDefault();
    });

    $("#next-10").click(function (e) {
        $(".other-contact-info").hide();
        $(".other-your_msg").show();
        e.preventDefault();
    });

    $("#prev-10").click(function (e) {
        $(".other-your_msg").hide();
        $(".other-contact-info").show();
        e.preventDefault();
    });

    // Blog Post Text Limit ...
    function truncateText(selector, maxLength) {
        var element = document.querySelectorAll(selector);
        for (var i = 0; i <= selector.length; i++) {
            var truncated = element[i].innerText;
            if (truncated.length > maxLength) {
                truncated = truncated.substr(0, maxLength) + "...";
            }
            element[i].innerText = truncated;
        }
    }
    truncateText(".boxes .box p", 100);
});


// Show more for Blog-Image

$(document).ready(function () {
    

    //   Hiding (show less button)
    $(".show-less-btn").hide();

    //  Showing Blog-Images upto 18  
    $(".show-more").slice(0, 18).show();

    // hiding (show more button) if items is less than or equal to 18
    if ($(".show-more").length <= 18) {
        $(".show-more-btn").hide();
    }

    // Calling (Show more button) on click
    $(".show-more-btn").on("click", function () {
        $(".show-more:hidden").slideDown("slow");
        if ($(".show-more:hidden").length == 0) {
            $(".show-more-btn").hide();
            $(".show-less-btn").show();
        }
    });

    //  Calling (Show less button) on click

    $(".show-less-btn").on("click", function () {
        $(".show-more").slice(18).slideUp("slow");
        $(".show-less-btn").hide();
        $(".show-more-btn").show();
    });
});
