const axios = require("axios");

const fetchArticles = () => {
  return axios
    .get("https://robins-nc-news-host.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

module.exports = { fetchArticles };
