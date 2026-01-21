import { useState } from "react";
import { uploadDocument } from "../api";

export default function UploadDocument() {
  const [docId, setDocId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

    async function handleUpload() {
    const res = await uploadDocument({
      doc_id: docId,
      owner_id: ownerId,
      content
    });
    setMessage(res.message || "Uploaded");
  }
  return (
    <div>
      <h2>Upload Document</h2>
      <input placeholder="Document ID" onChange={e => setDocId(e.target.value)} />
      <input placeholder="Owner ID" onChange={e => setOwnerId(e.target.value)} />
      <textarea
        placeholder="Paste document text here"
        rows={8}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

