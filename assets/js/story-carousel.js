(function () {
  "use strict";

  var carousels = document.querySelectorAll("[data-carousel]");

  var getGap = function (track) {
    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap || "0");
    return Number.isNaN(gap) ? 0 : gap;
  };

  var setupCarousel = function (carousel) {
    var viewport = carousel.querySelector("[data-carousel-viewport]");
    var track = carousel.querySelector(".story-carousel__track");
    var prevButton = carousel.querySelector("[data-carousel-prev]");
    var nextButton = carousel.querySelector("[data-carousel-next]");

    if (!viewport || !track || !prevButton || !nextButton) {
      return;
    }

    var getStep = function () {
      var firstCard = track.querySelector(".story-card");
      if (!firstCard) {
        return viewport.clientWidth * 0.85;
      }
      return firstCard.getBoundingClientRect().width + getGap(track);
    };

    var updateButtons = function () {
      var maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
      prevButton.disabled = viewport.scrollLeft <= 4;
      nextButton.disabled = viewport.scrollLeft >= maxScrollLeft - 4;
    };

    var scrollByStep = function (direction) {
      viewport.scrollBy({
        left: getStep() * direction,
        behavior: "smooth"
      });
    };

    prevButton.addEventListener("click", function () {
      scrollByStep(-1);
    });

    nextButton.addEventListener("click", function () {
      scrollByStep(1);
    });

    viewport.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollByStep(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollByStep(-1);
      }
    });

    var touchStartX = 0;
    var touchDeltaX = 0;

    viewport.addEventListener(
      "touchstart",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) {
          return;
        }
        touchStartX = event.changedTouches[0].clientX;
        touchDeltaX = 0;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchmove",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) {
          return;
        }
        touchDeltaX = event.changedTouches[0].clientX - touchStartX;
      },
      { passive: true }
    );

    viewport.addEventListener("touchend", function () {
      if (Math.abs(touchDeltaX) < 40) {
        return;
      }
      if (touchDeltaX < 0) {
        scrollByStep(1);
      } else {
        scrollByStep(-1);
      }
      touchDeltaX = 0;
    });

    viewport.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    updateButtons();
  };

  for (var i = 0; i < carousels.length; i += 1) {
    setupCarousel(carousels[i]);
  }
})();
