import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL } from './firebaseConfig';
import QRCode from 'qrcode.react';
import * as JSZip from 'jszip';

const ModelUploader = () => {
  const [file, setFile] = useState(null);
  const [modelUrl, setModelUrl] = useState('');
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadModel = async () => {
    if (!file) {
      alert('Veuillez sélectionner un fichier à télécharger.');
      return;
    }
  
    await uploadModelZip(file);
  
    const modelFolderName = 'modelFolder';
    const modelRef = ref(storage, `${modelFolderName}/scene.gltf`);
    const url = await getDownloadURL(modelRef);
    setModelUrl(url);
    setQrCodeGenerated(true);
  };
  

  const arUrl = `https://qrcode-ilyesse.web.app/ar.html?modelUrl=${encodeURIComponent(modelUrl)}`;

  const uploadModelZip = async (zipFile) => {
    const modelFolderName = 'modelFolder';

    // Load and extract the zip file
    const zip = new JSZip();
    const zipContent = await zip.loadAsync(zipFile);

    // Iterate through the files and upload them to Firebase Storage
    for (const fileName in zipContent.files) {
      const file = zipContent.files[fileName];
      if (!file.dir) {
        const fileContent = await file.async('blob');
        const fileRef = ref(storage, `${modelFolderName}/${fileName}`);
        await uploadBytes(fileRef, fileContent);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadModel}>Générer le code QR AR</button>
      {qrCodeGenerated && (
        <div>
          <h2>Code QR AR :</h2>
          <QRCode value={arUrl} size={256} />
        </div>
      )}
    </div>
  );
};

export default ModelUploader;
