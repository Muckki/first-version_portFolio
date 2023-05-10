import {
  htmlCss,
  javaScript,
  els,
  myFuture,
  myStory,
  myCareer,
  clear,
} from "./href.js";
document.addEventListener("DOMContentLoaded", () => {
  clear();
  let Alla = document.querySelectorAll(".aTag");
  let description = document.querySelector(".description");
  let descriptionButton = document.querySelector(".close");
  let thisHtml = document.querySelector(".this");
  let thisId = "";
  for (let i = 0; i < Alla.length; i++) {
    Alla[i].addEventListener("click", () => {
      if (description.classList.contains("active")) {
        description.classList.remove("active");
      } else {
        description.classList.add("active");
        description.style.zIndex = "1";
        thisId = Alla[i].id;
        thisHtml.innerHTML = thisId;
        thisHtml.style.fontWeight = "bolder";
        console.log(thisId);
        if (thisId == "HTML CSS") {
          htmlCss();
        } else if (thisId == "JavaScript") {
          javaScript();
        } else if (thisId == "Els") {
          els();
        } else if (thisId == "Career") {
          myCareer();
        } else if (thisId == "Story") {
          myStory();
        } else if (thisId == "Future") {
          myFuture();
        }
      }
    });
  }
  descriptionButton.addEventListener("click", () => {
    description.classList.remove("active");
    description.style.zIndex = "0";
    clear();
  });
});
