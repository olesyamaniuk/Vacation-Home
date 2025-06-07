$(function () {
  $(".t-q-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".t-q-gallery-list-left",
    nextArrow: ".t-q-gallery-list-right",
  });
});

$(function () {
  $(".t-q-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-q-features-list-left",
    nextArrow: ".t-q-features-list-right",
  });
});
$(function () {
  $(".t-q-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-q-characters-list-left",
    nextArrow: ".t-q-characters-list-right",
  });
});
