import { DatePicker } from "./index.js";

const calendarAll = () => {
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let prevBtn = document.querySelector(".prev-btn");
  let nextBtn = document.querySelector(".next-btn");
  prevBtn.addEventListener("click", showPrevMonth);
  nextBtn.addEventListener("click", showNextMonth);
  let input = document.querySelector("input");

  function showPrevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    showCalendar();
    DatePicker(currentMonth, currentYear);
  }

  function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    showCalendar();
    DatePicker(currentMonth, currentYear);
  }

  function showCalendar() {
    let calendarDates = document.querySelector(".dates");
    calendarDates.innerHTML = "";

    let newMonth = document.createElement("div");
    newMonth.innerHTML = `${currentYear} ${monthNames[currentMonth]}`;
    let currentMonthContainer = document.querySelector(".current-month");
    currentMonthContainer.innerHTML = "";
    currentMonthContainer.appendChild(newMonth);

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let prevLastDate = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
      let dateDiv = document.createElement("div");
      dateDiv.classList.add("date");
      dateDiv.classList.add("prev-month");
      dateDiv.innerHTML = prevLastDate - i;
      dateDiv.style.opacity = "0.5";
      calendarDates.appendChild(dateDiv);
    }

    for (let i = 1; i <= lastDate; i++) {
      let dateDiv = document.createElement("div");
      dateDiv.classList.add("date");
      if (
        currentYear === today.getFullYear() &&
        currentMonth === today.getMonth() &&
        i === currentDate
      ) {
        dateDiv.classList.add("today");
      }
      dateDiv.innerHTML = i;
      calendarDates.appendChild(dateDiv);
    }

    let nextMonthDays = 7 - (calendarDates.children.length % 7);
    if (nextMonthDays < 7) {
      for (let i = 1; i <= nextMonthDays; i++) {
        let dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.classList.add("next-month");
        dateDiv.innerHTML = i;
        dateDiv.style.opacity = "0.5";
        calendarDates.appendChild(dateDiv);
      }
    }

    let allDates = calendarDates.querySelectorAll(".date");
    for (let i = 0; i < allDates.length; i++) {
      if (i % 7 === 0) {
        allDates[i].style.color = "red";
      }
      allDates[i].addEventListener("mouseenter", () => {
        allDates[i].style.backgroundColor = "#84a98c";
        allDates[i].style.borderRadius = "50%";
      });
      allDates[i].addEventListener("mouseleave", () => {
        allDates[i].style.backgroundColor = "";
      });
    }
    DatePicker(currentMonth, currentYear);
  }
  showCalendar();
  input.addEventListener("click", () => {
    DatePicker(currentMonth, currentYear);
  });
};
calendarAll();
