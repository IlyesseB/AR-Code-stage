import React, { useState } from 'react';
import './App.css';
import ModelUploader from './ModelUploader';
import ModelViewer from './ModelViewer';

function App() {
  const [modelUrl, setModelUrl] = useState(null);

  return (
    <div className="App">
      <h1>Mon application de QR Code AR</h1>
      <ModelUploader onModelUploaded={setModelUrl} />
      {modelUrl && <ModelViewer modelUrl={modelUrl} />}
    </div>
  );
}

export default App;
