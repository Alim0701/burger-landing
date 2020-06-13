(function () {
  const btnReview = document.querySelectorAll(".btn__review");
  const popup = document.querySelector(".popup");
  for (let i = 0; i < btnReview.length; i++) {
    btnReview[i].addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("popup_active");
    });
  }
  popup.addEventListener("click", ({ target }) => {
    if (
      (target && target.classList.contains("review__close")) ||
      target.classList.contains("popup")
    ) {
      popup.classList.remove("popup_active");
    }
  });
})();
