const HeadLink = document.querySelector("link:last-of-type");
HeadLink.insertAdjacentHTML(
  "afterend",
  '<link href="star-rating/theme.css" rel="stylesheet" />'
);

const StarRating = ($container) => {
  const container = $container;
  const get = (target) => $container.querySelectorAll(target);
  container.innerHTML = '<div class="star-rating-container"></div>';
  const StarRatingContainer = get(".star-rating-container");
  StarRatingContainer.forEach(($container) => {
    const star = container.dataset.maxRating;

    for (let i = 1; i <= Number(star); i++) {
      $container.innerHTML += `<i class="icon-bxs-star"></i>`;
    }
  });

  const anjdi = $container.querySelectorAll("i");
  anjdi.forEach((anjdiTl, index) => {
    anjdiTl.addEventListener("mouseover", () => {
      for (let i = 0; i <= index; i++) {
        anjdi[i].classList.add("hovered");
      }
    });
    anjdiTl.addEventListener("mouseout", () => {
      anjdi.forEach((anjdiTl) => anjdiTl.classList.remove("hovered"));
    });
    anjdiTl.addEventListener("click", () => {
      anjdi.forEach((anjdiTl) => anjdiTl.classList.add("selected"));
    });
  });

  const $stars = $container.querySelectorAll(".star-rating-container > i");
  let selectedRating = 0;

  $stars.forEach(($star, index) => {
    $star.addEventListener("mouseenter", () => {
      $stars.forEach(($s, i) => {
        if (i <= index) {
          $s.classList.add("hovered");
        } else {
          $s.classList.remove("hovered");
        }
      });
    });

    $star.addEventListener("mouseleave", () => {
      $stars.forEach(($s) => {
        $s.classList.remove("hovered");
      });
    });

    $star.addEventListener("click", () => {
      selectedRating = index + 1;
      $stars.forEach(($s, i) => {
        if (i <= index) {
          $s.classList.add("selected");
        } else {
          $s.classList.remove("selected");
        }
      });

      const ratingChangeEvent = new CustomEvent("rating-change", {
        detail: selectedRating,
      });
      $container.dispatchEvent(ratingChangeEvent);
    });
  });
};

export default StarRating;
