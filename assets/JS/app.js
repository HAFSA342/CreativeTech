// JQuery
$('.home-banner-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
  

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("nav-style");
    } else {
        $(".navbar").removeClass("nav-style");
    }
}); //missing );
