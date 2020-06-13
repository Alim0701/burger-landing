(function () {
  const phone = document.querySelector('input[name="phone"]');

  phone.addEventListener("keydown", (e) => {
    const key = e.key;
    let isControl = false;

    if (
      key >= 0 ||
      key <= 9 ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Backspace"
    ) {
      isControl = true;
    }

    if (key === " ") {
      isControl = false;
    }

    if (!isControl) {
      e.preventDefault();
    }
  });
})();
