const Nav = () => {
  const div = document.querySelector("#root");

  const nav = document.createElement("nav");
  nav.className = "category-list";
  div.appendChild(nav);

  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const li_1 = document.createElement("li");
  li_1.id = "all";
  li_1.className = "category-item active";
  li_1.innerHTML = "전체보기";
  ul.appendChild(li_1);

  const li_2 = document.createElement("li");
  li_2.id = "business";
  li_2.className = "category-item";
  li_2.innerHTML = "비즈니스";
  ul.appendChild(li_2);

  const li_3 = document.createElement("li");
  li_3.id = "entertainment";
  li_3.className = "category-item";
  li_3.innerHTML = "엔터테인먼트";
  ul.appendChild(li_3);

  const li_4 = document.createElement("li");
  li_4.id = "health";
  li_4.className = "category-item";
  li_4.innerHTML = "건강";
  ul.appendChild(li_4);

  const li_5 = document.createElement("li");
  li_5.id = "science";
  li_5.className = "category-item";
  li_5.innerHTML = "과학";
  ul.appendChild(li_5);

  const li_6 = document.createElement("li");
  li_6.id = "sports";
  li_6.className = "category-item";
  li_6.innerHTML = "스포츠";
  ul.appendChild(li_6);

  const li_7 = document.createElement("li");
  li_7.id = "technology";
  li_7.className = "category-item";
  li_7.innerHTML = "기술";
  ul.appendChild(li_7);
};

export default Nav;
