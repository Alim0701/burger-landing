$(document).ready(() => {
  $(".main-content").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 700,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical",
  });

  $(".page1").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(1);
  });

  $(".page2").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(2);
  });

  $(".page3").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(3);
  });

  $(".page4").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(4);
  });

  $(".page5").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(5);
  });

  $(".page6").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(6);
  });

  $(".page7").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(7);
  });

  $(".page8").on("click", function (e) {
    e.preventDefault();
    $(".main-content").moveTo(8);
  });

  $(".ellipse").on("click", function (e) {
    $(".main-content").moveDown();
  });
});
