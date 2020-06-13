(function () {
  const teamItem = document.querySelectorAll(".team__item");
  const teamName = document.querySelectorAll(".team__name");

  for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener("click", (e) => {
      e.preventDefault();

      if (!teamItem[i].classList.contains("team__item_active")) {
        for (let i = 0; i < teamItem.length; i++) {
          teamItem[i].classList.remove("team__item_active");
        }
        teamItem[i].classList.add("team__item_active");
      } else {
        teamItem[i].classList.remove("team__item_active");
      }
    });
  }
})();
