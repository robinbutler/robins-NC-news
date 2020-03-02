const axios = require("axios");

const fetchTopArticles = ({ slug, limit }) => {
  console.log(limit);
  return axios
    .get("https://robins-nc-news-host.herokuapp.com/api/articles", {
      params: { sort_by: "votes", topic: `${slug}`, limit: `${limit}` }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const fetchTopics = () => {
  return axios
    .get("https://robins-nc-news-host.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

module.exports = { fetchTopArticles, fetchTopics };
