const axios = require("axios");

const fetchTopArticles = ({ topic, limit }, sort_by) => {
  return axios
    .get("https://robins-nc-news-host.herokuapp.com/api/articles", {
      params: { sort_by, topic, limit }
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

const fetchArticleById = article_id => {
  return axios
    .get(`https://robins-nc-news-host.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

const fetchCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://robins-nc-news-host.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const postComment = (article_id, username, body) => {
  return axios.post(
    `https:/robins-nc-news-host.herokuapp.com/api/articles/${article_id}/comments`,
    { body, username }
  );
};

const deleteComment = comment_id => {
  return axios.delete(
    `https://robins-nc-news-host.herokuapp.com/api/comments/${comment_id}`
  );
};

const patchVotes = (id, value, type) => {
  axios.patch(`https://robins-nc-news-host.herokuapp.com/api/${type}/${id}`, {
    inc_votes: value
  });
};

module.exports = {
  fetchTopArticles,
  fetchTopics,
  fetchArticleById,
  fetchCommentsByArticleId,
  postComment,
  deleteComment,
  patchVotes
};
