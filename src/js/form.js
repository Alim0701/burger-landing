// (function () {
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const popup = document.querySelector(".popup__success");
  // const popupError = document.querySelector(".popup__error");
  // const btnPopup = document.querySelectorAll(".btn__popup");

  // for (let i = 0; i < btnPopup.length; i++) {
  //   btnPopup[i].addEventListener("click", (e) => {
  //     e.preventDefault();
  //     popupError.classList.remove("popup_active");
  //     popup.classList.remove("popup_active");
  //   });
  // }

  // const formData = new FormData(form);
  // formData.append("to", "myExamplEmail@mail.ru");

  // fetch("https://webdev-api.loftschool.com/sendmail", {
  //   method: "POST",
  //   body: formData,
  // })
  //   .then(() => {
  //     popup.classList.add("popup_active");
  //     const res = fetch("https://webdev-api.loftschool.com/sendmail");
  //     if (!res.ok) {
  //       throw error;
  //     }
  //   })
  //   .catch(() => {
  //     popupError.classList.add("popup_active");
  //   })
  //   .finally(() => {
  //     form.reset();
  //   });

  const formData = new FormData(form);
  formData.append("to", "myExamplEmail@mail.ru");

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.send(formData);

  form.reset();

  xhr.addEventListener("load", () => {
    const popup = document.querySelector(".popup__success");
    const popupError = document.querySelector(".popup__error");
    const btnPopup = document.querySelectorAll(".btn__popup");

    if (xhr.status >= 400) {
      popupError.classList.add("popup_active");
    } else {
      popup.classList.add("popup_active");
    }

    for (let i = 0; i < btnPopup.length; i++) {
      btnPopup[i].addEventListener("click", (e) => {
        e.preventDefault();
        popupError.classList.remove("popup_active");
        popup.classList.remove("popup_active");
      });
    }
  });
});
// })();
