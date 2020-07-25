import React from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album.js';

const posts = ["Hello"]

function App() {
  return (
    <div className="App">
      <Album posts={posts}/>
    </div>
  );
}

export default App;
