(function () {
  const menuItem = document.querySelectorAll(".menu__item");
  const menuName = document.querySelectorAll(".menu__link");
  const menuClose = document.querySelectorAll(".close");

  for (let i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener("click", (e) => {
      e.preventDefault();

      if (!menuItem[i].classList.contains("menu__item_active")) {
        for (let i = 0; i < menuItem.length; i++) {
          menuItem[i].classList.remove("menu__item_active");
        }
        menuItem[i].classList.add("menu__item_active");
      } else {
        menuItem[i].classList.remove("menu__item_active");
      }
    });
  }

  menuClose.forEach((item) => {
    item.addEventListener("click", () => {
      menuItem.forEach((item) => {
        item.classList.remove("menu__item_active");
      });
    });
  });
})();
