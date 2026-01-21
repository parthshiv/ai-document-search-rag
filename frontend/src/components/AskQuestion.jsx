import { useState } from "react";
import { askQuestion } from "../api";

export default function AskQuestion() {
  const [docId, setDocId] = useState("");
  const [userId, setUserId] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  async function handleAsk() {
    const res = await askQuestion({
      doc_id: docId,
      user_id: userId,
      question
    });
    
    setAnswer(res.answer || res.error);
  }
  return (
    <div>
      <h2>Ask Document (RAG)</h2>
      <input placeholder="Document ID" onChange={e => setDocId(e.target.value)} />
      <input placeholder="User ID" onChange={e => setUserId(e.target.value)} />
      <input placeholder="Question" onChange={e => setQuestion(e.target.value)} />
      <button onClick={handleAsk}>Ask</button>
      <p><strong>Answer:</strong> {answer}</p>
    </div>
  );
}
