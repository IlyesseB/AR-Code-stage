import React from 'react';
import QRCode from 'qrcode';

const ModelViewer = ({ modelUrl }) => {
  const generateQRCode = async () => {
    try {
      // Générer le code QR
      const canvas = document.getElementById('qr-code');
      QRCode.toCanvas(canvas, modelUrl, { width: 200 }, function (error) {
        if (error) {
          console.error('Erreur lors de la génération du code QR:', error);
        }
      });
    } catch (error) {
      console.error('Erreur lors de la génération du code QR:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Visualisation du modèle 3D</h2>
      <model-viewer
        src={modelUrl}
        alt="Modèle 3D"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '400px' }}
      ></model-viewer>
      <button onClick={generateQRCode}>Générer le code QR AR</button>
      <canvas id="qr-code"></canvas>
    </div>
  );
};

export default ModelViewer;
