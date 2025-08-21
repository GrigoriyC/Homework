alert("Задание 1.\n\nСоздать html-страницу с трекбаром.\nПредоставить пользователю возможность изменять положение синего указателя.")

const trackbars = document.querySelectorAll(".trackbar");
for (let i = 0; i < trackbars.length; i++) {
  let trackbarEl = trackbars[i];

  const button = trackbarEl.querySelector(".trackButton");
  if (button && button instanceof HTMLElement) {
    let dragging = false;

    const parentWidth = trackbarEl.offsetWidth;
    const elementWidth = button.offsetWidth;

    let clickOffset = 0;
    button.addEventListener("mousedown", () => {
      clickOffset = event.pageX - button.offsetLeft - 8 - elementWidth / 2;
      dragging = true;
    });
    document.body.addEventListener("mouseup", () => {
      dragging = false;
    });
    document.body.addEventListener("mousemove", (event) => {
      if (dragging) {
        let currentPosition =
          event.pageX - button.offsetLeft - 8 - elementWidth / 2;
        let elementPosition = parseInt(
          window.getComputedStyle(button).getPropertyValue("left")
        );

        let nextPosition = elementPosition + currentPosition - clickOffset;

        if (nextPosition < 0) nextPosition = 0;
        if (nextPosition >= parentWidth - elementWidth)
          nextPosition = parentWidth - elementWidth;

        if (elementPosition == nextPosition + 2) return false;
        nextPosition = nextPosition + "px";

        button.style.left = nextPosition;
        let colorEl =
          "hsl(" +
          (
            120 -
            (100 -
              Math.floor(
                (elementPosition * 100) / (parentWidth - elementWidth)
              )) *
              1.2
          ).toString(10) +
          ",70%,60%)";

        button.style.setProperty("--next-bg-color", colorEl);

        trackbarEl.setAttribute(
          "complete",
          Math.floor((elementPosition * 100) / (parentWidth - elementWidth))
        );
        if ((trackSelector = trackbarEl.querySelector(".trackSelector")))
          trackSelector.style.width =
            Math.floor(
              (elementPosition * parentWidth) / (parentWidth - elementWidth)
            ) + "px";

        if ((trackPercentage = trackbarEl.querySelector(".trackPercentage")))
          trackPercentage.innerHTML =
            Math.floor((elementPosition * 100) / (parentWidth - elementWidth)) +
            "%";
      }
    });
    document.body.addEventListener("mouseleave", () => {
      dragging = false;
    });
  }
};
