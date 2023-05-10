import { Nav, NewsList } from "./components/index.js";
function appJs() {
  Nav();
  NewsList();
  let page = 1;
  const pageSize = "5";
  const apiKey = "7ce908cb8968467fb846de1a04ba4c12";

  function handleCategoryClick(event) {
    page = 1;
    const activeElement = document.querySelector(".category-item.active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }
    event.target.classList.add("active");
    const category = event.target.id;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      category === "all" ? "" : category
    }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        const articles = response.data.articles;
        const newslist = document.querySelector("article");
        newslist.innerHTML = "";
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
          const { title, description, url, urlToImage } = article;

          const newsItem = document.createElement("section");
          newsItem.className = "news-item";
          newslist.appendChild(newsItem);

          const divThumbnail = document.createElement("div");
          divThumbnail.className = "thumbnail";
          newsItem.appendChild(divThumbnail);

          const aTag = document.createElement("a");
          aTag.setAttribute("href", url);
          aTag.setAttribute("target", "_blank");
          aTag.setAttribute("rel", "noopener noreferrer");
          divThumbnail.appendChild(aTag);

          const imgTag = document.createElement("img");
          imgTag.setAttribute("src", urlToImage);
          imgTag.setAttribute("alt", "thumnail");
          aTag.appendChild(imgTag);

          if (urlToImage == null) {
            imgTag.setAttribute(
              "src",
              "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            );
          }

          const divContents = document.createElement("div");
          divContents.className = "contents";
          newsItem.appendChild(divContents);

          const h_2 = document.createElement("h2");
          divContents.appendChild(h_2);

          const aTag_2 = document.createElement("a");
          aTag_2.setAttribute("href", url);
          aTag_2.setAttribute("target", "_blank");
          aTag_2.setAttribute("rel", "noopener noreferrer");
          aTag_2.innerHTML = title;
          h_2.appendChild(aTag_2);

          const pTag = document.createElement("p");
          pTag.innerHTML = description;
          divContents.appendChild(pTag);

          if (description == null) {
            pTag.innerHTML = "";
          }
        }
      })
      .catch((error) => console.log(error));
  }

  function makeNormal() {
    console.log(page);
    const activeElement = document.querySelector(".category-item.active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }
    activeElement.classList.add("active");

    const category = activeElement.id;
    const pageSize = "5";
    const apiKey = "7ce908cb8968467fb846de1a04ba4c12";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      category === "all" ? "" : category
    }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        const articles = response.data.articles;
        const newslist = document.querySelector("article");
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
          const { title, description, url, urlToImage } = article;

          const newsItem = document.createElement("section");
          newsItem.className = "news-item";
          newslist.appendChild(newsItem);

          const divThumbnail = document.createElement("div");
          divThumbnail.className = "thumbnail";
          newsItem.appendChild(divThumbnail);

          const aTag = document.createElement("a");
          aTag.setAttribute("href", url);
          aTag.setAttribute("target", "_blank");
          aTag.setAttribute("rel", "noopener noreferrer");
          divThumbnail.appendChild(aTag);

          const imgTag = document.createElement("img");
          imgTag.setAttribute("src", urlToImage);
          imgTag.setAttribute("alt", "thumnail");
          aTag.appendChild(imgTag);

          if (urlToImage == null) {
            imgTag.setAttribute(
              "src",
              "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            );
          }

          const divContents = document.createElement("div");
          divContents.className = "contents";
          newsItem.appendChild(divContents);

          const h_2 = document.createElement("h2");
          divContents.appendChild(h_2);

          const aTag_2 = document.createElement("a");
          aTag_2.setAttribute("href", url);
          aTag_2.setAttribute("target", "_blank");
          aTag_2.setAttribute("rel", "noopener noreferrer");
          aTag_2.innerHTML = title;
          h_2.appendChild(aTag_2);

          const pTag = document.createElement("p");
          pTag.innerHTML = description;
          divContents.appendChild(pTag);

          if (description == null) {
            pTag.innerHTML = "";
          }
        }
      })
      .catch((error) => console.log(error));
  }

  makeNormal();

  document.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", handleCategoryClick);
  });

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        page += 1;
        makeNormal();
      }
    });
  });
  const divcon = document.querySelector(".scroll-observer");
  scrollObserver.observe(divcon);
}
appJs();
