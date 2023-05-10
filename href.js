function htmlCss() {
  let hrefTag = document.querySelector(".href");
  let pictureTag = document.querySelector(".picture");
  for (let i = 1; i <= 5; i++) {
    let aTagCreate = document.createElement("a");
    aTagCreate.className = "HtmlMissions";
    hrefTag.appendChild(aTagCreate);
  }

  let htmlAllA = document.querySelectorAll(".HtmlMissions");
  for (let i = 0; i < htmlAllA.length; i++) {
    htmlAllA[i].href = `/missions/HTML,CSS/Mission-0${i + 1}/index.html`;
    htmlAllA[i].target = "_blank";
    htmlAllA[i].id = `HTMLM${i + 1}`;
    htmlAllA[i].innerHTML = `Mission-${i + 1}`;
    htmlAllA[i].style.width = "20rem";
    htmlAllA[i].style.height = "10rem";
    htmlAllA[i].style.border = "0.3rem dotted gray";
    htmlAllA[i].style.display = "flex";
    htmlAllA[i].style.alignContent = "center";
    htmlAllA[i].style.justifyContent = "center";
    htmlAllA[i].style.paddingTop = "1rem";
    htmlAllA[i].style.marginBottom = "0.5rem";
    htmlAllA[i].style.backgroundColor = "wheat";
    htmlAllA[i].style.borderRadius = "0.8rem";
    htmlAllA[i].style.fontSize = "3rem";
    htmlAllA[i].style.fontWeight = "bolder";

    htmlAllA[i].addEventListener("mouseover", () => {
      pictureTag.style.backgroundImage = `url(/assets/missions/html,css/mission${
        i + 1
      }.png)`;
      pictureTag.style.backgroundRepeat = "no-repeat";
      pictureTag.style.backgroundSize = "cover";
    });
    htmlAllA[i].addEventListener("mouseout", () => {
      pictureTag.style.backgroundImage = "none";
    });
  }
}
function javaScript() {
  let hrefTag = document.querySelector(".href");
  let pictureTag = document.querySelector(".picture");
  for (let i = 1; i <= 5; i++) {
    let aTagCreate = document.createElement("a");
    aTagCreate.className = "JavascriptMissions";
    hrefTag.appendChild(aTagCreate);
  }

  let htmlAllA = document.querySelectorAll(".JavascriptMissions");
  for (let i = 0; i < htmlAllA.length; i++) {
    htmlAllA[i].href = `/missions/JavaScript/mission${
      i + 1
    }/template/index.html`;
    htmlAllA[i].target = "_blank";
    htmlAllA[i].id = `JavascriptM${i + 1}`;
    htmlAllA[i].innerHTML = `Mission-${i + 1}`;
    htmlAllA[i].style.width = "20rem";
    htmlAllA[i].style.height = "10rem";
    htmlAllA[i].style.border = "0.3rem dotted gray";
    htmlAllA[i].style.display = "flex";
    htmlAllA[i].style.alignContent = "center";
    htmlAllA[i].style.justifyContent = "center";
    htmlAllA[i].style.paddingTop = "1rem";
    htmlAllA[i].style.marginBottom = "0.5rem";
    htmlAllA[i].style.marginLeft = "4rem";
    htmlAllA[i].style.backgroundColor = "skyblue";
    htmlAllA[i].style.borderRadius = "0.8rem";
    htmlAllA[i].style.fontSize = "3rem";
    htmlAllA[i].style.fontWeight = "bolder";

    htmlAllA[i].addEventListener("mouseover", () => {
      pictureTag.style.backgroundImage = `url(/assets/missions/JavaScript/mission${
        i + 1
      }.png)`;
      pictureTag.style.backgroundRepeat = "no-repeat";
      pictureTag.style.backgroundSize = "cover";
    });
    htmlAllA[i].addEventListener("mouseout", () => {
      pictureTag.style.backgroundImage = "none";
    });
  }
}
function myStory() {
  const thisTag = document.querySelector(".this");
  const storyDivTag = document.createElement("div");
  storyDivTag.innerHTML =
    "공부한 기간, 현재까지 3개월.<br>생활을 해야하니 다른 일을 하며 공부를 병행하고 있던 도중 든 생각은 도저히 이렇게 해서는 결과가 나올 수 없다.<br>인생의 갈림길이 될 수 있는 이 중요한 시기에 다른 의미없는 일을 하며 시간을 허비할 수 없다 판단하여 부족한 지식이지만<br> 할 수 있는 최대한의 방법으로 포트폴리오를 제작해봤습니다. 이제 리액트를 진입하는 시기에 제로베이스라는 플랫폼에서 공부하며 마크업과 js 과제를 한것이 프로젝트의 전부이기에 오른쪽에 있는 이정표에 등록해놨습니다.<br>공부하고싶습니다.<br>관련된 일을 하며 더더욱 성장하고싶습니다. 감사합니다.";
  storyDivTag.style.overflow = "auto";
  storyDivTag.style.width = "290%";
  storyDivTag.style.fontSize = "2rem";
  storyDivTag.style.lineHeight = "3rem";
  storyDivTag.style.fontWeight = "bold";
  thisTag.appendChild(storyDivTag);
}
function myCareer() {
  const thisTag = document.querySelector(".this");
  const careerDiv = document.createElement("div");
  careerDiv.innerHTML = "404 not found";
  careerDiv.style.fontSize = "12rem";
  careerDiv.style.paddingTop = "4rem";
  thisTag.appendChild(careerDiv);
}
function myFuture() {
  const hrefTag = document.querySelector(".href");
  const devTag = document.createElement("a");
  devTag.href = "/";
  devTag.innerHTML = "This link is Yours!!";
  devTag.style.fontSize = "8rem";
  devTag.style.position = "absolute";
  devTag.style.width = "70rem";
  devTag.style.height = "15rem";
  devTag.style.color = "darkblue";
  devTag.style.left = "20%";
  devTag.style.top = "30%";
  devTag.style.fontWeight = "bolder";
  devTag.target = "_blank";
  hrefTag.appendChild(devTag);
}
function els() {
  const hrefTag = document.querySelector(".href");
  const elsAtag = document.createElement("a");
  elsAtag.href = "https://blog.naver.com/ckdduq8853";
  elsAtag.innerHTML = "My Blog";
  elsAtag.target = "_blank";
  elsAtag.style.color = "darkblue";
  elsAtag.style.fontSize = "4rem";
  elsAtag.style.width = "20rem";
  elsAtag.style.height = "8rem";
  elsAtag.style.marginBottom = "2rem";
  elsAtag.style.marginTop = "2rem";
  elsAtag.style.border = "0.4rem dotted black";
  elsAtag.style.borderRadius = "0.8rem";
  elsAtag.style.backgroundColor = "wheat";
  elsAtag.style.paddingTop = "0.5rem";
  elsAtag.style.paddingLeft = "1.5rem";
  elsAtag.style.fontWeight = "bold";
  hrefTag.appendChild(elsAtag);
  const elsPhone = document.createElement("div");
  elsPhone.innerHTML = "Phone Number : 010-4291-7151";
  elsPhone.style.fontSize = "3rem";
  elsPhone.style.width = "50rem";
  elsPhone.style.height = "8rem";
  elsPhone.style.marginBottom = "2rem";
  elsPhone.style.border = "0.4rem dotted black";
  elsPhone.style.borderRadius = "0.8rem";
  elsPhone.style.paddingTop = "1.3rem";
  elsPhone.style.paddingLeft = "1.5rem";
  elsPhone.style.backgroundColor = "wheat";
  hrefTag.appendChild(elsPhone);
  const elsEmail = document.createElement("div");
  elsEmail.innerHTML = "Email : ckdduq0508@gmail.com";
  elsEmail.style.fontSize = "3rem";
  elsEmail.style.width = "50rem";
  elsEmail.style.height = "8rem";
  elsEmail.style.marginBottom = "2rem";
  elsEmail.style.border = "0.4rem dotted black";
  elsEmail.style.borderRadius = "0.8rem";
  elsEmail.style.padding = "1.3rem";
  elsEmail.style.paddingLeft = "1.5rem";
  elsEmail.style.backgroundColor = "wheat";
  hrefTag.appendChild(elsEmail);
}
function clear() {
  let hrefTag = document.querySelector(".href");
  let thisTag = document.querySelector(".this");
  let pictureTag = document.querySelector(".picture");

  hrefTag.innerHTML = "";
  thisTag.innerHTML = "";
  pictureTag.innerHTML = "";
}
export { htmlCss, javaScript, els, myStory, myCareer, myFuture, clear };
