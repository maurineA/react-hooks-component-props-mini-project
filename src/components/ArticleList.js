import React from 'react';
import Article from './Article';

function ArticleList(props) {
    const articles = props.articles.map((article, index) => (
      <Article key={index} post={article} />
    ));
    return <main>{articles}</main>;
  }

export default ArticleList;