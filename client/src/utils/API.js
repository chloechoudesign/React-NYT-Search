import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "89e53898cc8e488e87c03f07ed0f5b61";

export default {
  getSearch(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles() {
    return axios.get("/api/articles");
  },
  saveArticles(Article) {
    return axios.post("api/articles", Article)
  },
  deleteArticle(id) {
    return axios.delete("api/articles/" + id);
  }
};
