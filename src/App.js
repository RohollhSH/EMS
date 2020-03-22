import React from 'react';
import './App.css';
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import MainMenu from "./MainMenu/MainMenu";
import ImportantTopics from "./importantTopics/ImportantTopics";

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <HeaderBanner />
      <MainMenu/>
      <ImportantTopics/>
    </div>
  );
}

export default App;