import React from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">Memory Game</p>
        <p className="App-subtitle">Match Cards To Win</p>
      </header>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
    </div>
  );
}

export default App;
