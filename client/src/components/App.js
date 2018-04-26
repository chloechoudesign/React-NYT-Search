import React, {Component} from 'react';
import Search from "./Search/Search";
import Results from "./Results/Results";
import Saved from "./Saved/Saved";
import API from "./../utils/API";
import "./App.css";

class App extends Component {
  state = {
    search: "",
    result: [],
    savedArticles: []
  }

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getSavedArticles().then((res) => {
      this.setState({savedArticles: res.data});
    }).catch((err) => {
      console.log(err);
    });
  };

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.search !== "") {
      API.getSearch(this.state.search).then((res) => {
        this.setState({result: res.data.response.docs})
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  handleSaveButton = (title, url, date, snippet) => {
    API.saveArticles({title, url, date, snippet}).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleDeleteButton = (id) => {
    API.deleteArticle(id).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="container">

        <div className="page-header">
          <h1 className="display-1 text-center">New York Times</h1>
          <h5 className="display-4 text-center">A React Search App</h5>
        </div>
        
        <Search 
          handleFormSubmit={this.handleFormSubmit} 
          handleInputChange={this.handleInputChange} 
          search={this.state.search}
        />

        <Results 
          result={this.state.result} 
          handleSaveButton={this.handleSaveButton}
        />

        <Saved 
          savedArticles={this.state.savedArticles} 
          handleDeleteButton={this.handleDeleteButton}
        />
      </div>
    );
  }
}

export default App;