import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <PostList />
    </React.Fragment>
  )
}

export default App;