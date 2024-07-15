import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error("There was an error uploading the file!", error);
      });
  };

  return (
    <div className="App">
      <h1>Image Upload and Recommendation</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      
      {results.length > 0 && (
        <div>
          <h2>Recommendations:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <img src={`images/${result.filename}`} alt={`Recommended ${index}`} width="100" />
                <p>Similarity: {result.similarity.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
