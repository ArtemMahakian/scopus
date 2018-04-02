$(document).ready(function() {

    // install niceScroll
    $('body').niceScroll({
        cursorwidth: "5px",
        cursorcolor: "#ff4932",
        cursorborder: "1px solid #fff",
        scrollspeed: 150,
        boxzoom: true,
        horizrailenabled : false // чтобы не появлялся горизонтальный скролл
    });

    //install preloader
    $(window).load(function() {
        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");
    });

    //install owlCarousel
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        navigationText: [''],
        slideSpeed : 800,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        pagination: false,
        autoPlay: false
    });

    //install scroll to ID
    $('.mouse-down a, .main-menu a, .hidden-menu a').mPageScroll2id();

    // // parallax
    // $('.parallax-main').parallax({
    //     imageSrc: '../img/provvedimenti-cms.jpg'
    // });

    // Кнопка вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    //install equalheights
    $('.reserve-item').equalHeights();
    $('.publish-item-last').equalHeights();

    //install headhesive
    var options = {
        offset: 1000
    };
    var header = new Headhesive('.top-menu, .burger-wrap', options);

    // install UItoTop
    $('body').UItoTop();

});

//instal magnificPopup form button
$('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
});

$("a[href=#callback]").click(function(){
    $("#callback .formname").val($(this).data("form"));
});

//E-mail Ajax Send
$("form-bottom").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Заявка отправлена!");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});
