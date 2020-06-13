(function () {
  $(".slider__list").slick({
    prevArrow: ".arrow__left-link",
    nextArrow: ".arrow__right-link",
    focusOnSelect: true,
  });

  $(".arrow-link").on("click", (e) => {
    e.preventDefault();
  });
  // const arrowLeft = document.querySelector(".arrow__left-link");
  // const arrowRight = document.querySelector(".arrow__right-link");
  // const sliderList = document.querySelector(".slider__list");
  // const sliderItems = document.querySelectorAll(".slider__item");
  // sliderList.style.width = sliderItems.length * 100 + "%";
  // const step = 100;
  // const minRight = 0;
  // const maxRight = step * (sliderItems.length - 1);
  // let currentRight = 0;
  // sliderList.style.right = currentRight;
  // arrowLeft.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (currentRight > minRight) {
  //     currentRight -= step;
  //     sliderList.style.right = currentRight + "%";
  //   } else {
  //     currentRight = maxRight;
  //     sliderList.style.right = currentRight + "%";
  //   }
  // });
  // arrowRight.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (currentRight < maxRight) {
  //     currentRight += step;
  //     sliderList.style.right = currentRight + "%";
  //   } else {
  //     currentRight = minRight;
  //     sliderList.style.right = currentRight + "%";
  //   }
  // });
  // const moveSlide = (container, slideNum) => {
  //   const items = container.find(".slider__item"),
  //     activeSlide = items.filter(".slider__item_active"),
  //     reqItem = items.eq(slideNum),
  //     reqIndex = reqItem.index(),
  //     list = container.find(".slider__list"),
  //     duration = 400;
  //   if (reqItem.length) {
  //     list.animate(
  //       {
  //         left: -reqIndex * 100 + "%",
  //       },
  //       duration,
  //       function () {
  //         activeSlide.removeClass("slider__item_active");
  //         reqItem.addClass("slider__item_active");
  //       }
  //     );
  //   }
  // };
  // $(".arrow-link").on("click", function (e) {
  //   e.preventDefault();
  //   const $this = $(this),
  //     container = $this.siblings(".slider"),
  //     items = $(".slider__item", container),
  //     activeItem = items.filter(".slider__item_active");
  //   let existedItem, edgeItem, reqItem;
  //   if ($this.hasClass("arrow__right-link")) {
  //     existedItem = activeItem.next();
  //     edgeItem = items.first();
  //   }
  //   if ($this.hasClass("arrow__left-link")) {
  //     existedItem = activeItem.prev();
  //     edgeItem = items.last();
  //   }
  //   reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
  //   moveSlide(container, reqItem);
  // });
  // Composition
  const composition = document.querySelectorAll(".composition");
  for (let i = 0; i < composition.length; i++) {
    composition[i].addEventListener("click", () => {
      if (!composition[i].classList.contains("composition_active")) {
        composition[i].classList.add("composition_active");
        const close = document.querySelectorAll(".composition__close");
        for (let j = 0; j < close.length; j++) {
          close[j].addEventListener("click", (e) => {
            e.stopPropagation();
            composition[i].classList.remove("composition_active");
          });
        }
      } else {
        composition[i].classList.remove("composition_active");
      }
    });
  }
})();
