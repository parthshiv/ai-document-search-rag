import { useState } from 'react'
import './App.css'
import UploadDocument from "./components/UploadDocument";
import AskQuestion from "./components/AskQuestion";


function App() {
  

  return (
    <div style={{ padding: 30 }}>
      <h1>AI Document Search & RAG Demo</h1>
      <UploadDocument />
      <hr />
      <AskQuestion />
    </div>
  );
}

export default App
