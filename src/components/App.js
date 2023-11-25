// App.js

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

function App() {
  return (
    <div>
      <Header blogName={data.blogName} />
      <About image={data.aboutImage} aboutText={data.aboutText} />
      <ArticleList articles={data.articles} />
    </div>
  );
}

export default App;
