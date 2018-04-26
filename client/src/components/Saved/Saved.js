import React from "react";

const Saved = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">Saved Articles</div>

      <div className="panel-body result-heading" id="wellSection">
        {props.savedArticles.map((article) => {
          return (
            <div className="well" key={article._id}>
              <h5 id="section">
                <button 
                  onClick={() => props.handleDeleteButton(article._id)} 
                  className="delete-btn">
                  <i className="far fa-trash-alt"></i> Delete
                </button>
                {article.date}
              </h5>
              
              <a href={article.url} target="_blank" id="title">
                {article.title}
              </a>

              <h5 id="summary">{article.snippet}</h5>
              <br/>
              <hr />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}; 
  
export default Saved;