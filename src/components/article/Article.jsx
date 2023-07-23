import React from 'react'
import './article.css'
const Article = (props) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={props.imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{props.date}</p>
          <h3>{props.text}</h3>
        </div>
        <p className="pa">Read full Article</p>
      </div>
    </div>
  )
}

export default Article
