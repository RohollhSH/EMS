import React from 'react';
import './App.css';
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import MainMenu from "./MainMenu/MainMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <HeaderBanner />
      <MainMenu/>
    </div>
  );
}

export default App;