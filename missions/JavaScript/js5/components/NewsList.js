function NewsList() {
  const div = document.querySelector("#root");
  let page = 1;
  let pageSize = 5;
  let apiKey = `7ce908cb8968467fb846de1a04ba4c12`;
  let liId = document.querySelector(".category-item.active");
  let category = liId.id;
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
    category === "all" ? "" : category
  }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  const newsListContainer = document.createElement("div");
  newsListContainer.className = "news-list-container";
  div.appendChild(newsListContainer);

  const newslist = document.createElement("article");
  newslist.className = "news-list";
  newsListContainer.appendChild(newslist);

  const divScroll = document.createElement("div");
  divScroll.className = "scroll-observer";
  newsListContainer.appendChild(divScroll);

  const imgTag_2 = document.createElement("img");
  imgTag_2.setAttribute("src", "img/ball-triangle.svg");
  imgTag_2.setAttribute("alt", "Loading...");
  divScroll.appendChild(imgTag_2);
}

export default NewsList;
