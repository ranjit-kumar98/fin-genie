import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("statement", file);
    // Will be sent to backend in Day 3
    console.log("File ready for upload", file);
  };

  return (
    <div>
      <h2>Upload Bank Statement</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.csv,.xlsx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
