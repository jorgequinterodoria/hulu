import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Results from './components/Results'
import request from './request'



function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)
  return (
    <div className="app">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
