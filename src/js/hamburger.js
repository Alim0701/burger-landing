(function () {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger__menu");
  const btnOrder = document.querySelector(".btn__order");

  hamburger.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("hamburger__menu_active")) {
      hamburger.classList.remove("hamburger_active");
      hamburgerMenu.classList.remove("hamburger__menu_active");
      (btnOrder.style.zIndex = "1"), (btnOrder.style.opacity = "1");
      $("body").removeClass("disabled-onepage-scroll");
    } else {
      hamburger.classList.add("hamburger_active");
      hamburgerMenu.classList.add("hamburger__menu_active");
      (btnOrder.style.zIndex = "-1"), (btnOrder.style.opacity = "0.2");
      $("body").addClass("disabled-onepage-scroll");
    }
  });

  $(".hamburger__link").on("click", (e) => {
    e.preventDefault();
    $(".hamburger__menu").removeClass("hamburger__menu_active");
    $("body").removeClass("disabled-onepage-scroll");
    $(".hamburger").removeClass("hamburger_active");
    $(".btn__order").css({
      zIndex: 1,
      opacity: 1,
    });
  });
})();
