export const DatePicker = (currentMonth,currentYear) => {
    const calendar = document.querySelector(".calendar");
    const input = document.querySelector(".date-picking");
    const body = document.querySelector("body");
    input.addEventListener("click", () =>{
        calendar.style.display = "inherit";
    });

    body.addEventListener("click", (event) => {
        if (!calendar.contains(event.target) && event.target !== input){
            calendar.style.display = "none";
        }
    });

    
    const date = document.querySelectorAll(".date");
    for (let i=0; i<date.length ; i++){
        date[i].addEventListener("click", () => {
            if (date[i].classList.contains("prev-month")){
                currentMonth--;
                
            }else if (date[i].classList.contains("next-month")){
                currentMonth++;
            }
            const selday = date[i].innerHTML.toString().padStart(2,"0");
            let selMon = (currentMonth +1).toString().padStart(2,"0");
            if (currentMonth === -1){
                selMon = "12";
                currentYear--;
            }else if (selMon <=1){
                selMon = (currentMonth +1).toString().padStart(2,"0");
            }else if (selMon >12){
                selMon = "01";
                currentYear++;
            }

            input.value = `${currentYear}-${selMon}-${selday}`;
            calendar.style.display = "none";
            console.log(`${currentYear}-${selMon}-${selday}`);
        });
    };       
}
