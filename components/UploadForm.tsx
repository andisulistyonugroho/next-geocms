"use client";
import { useState } from "react";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handeFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const ErrorBox = () => {
    if (selectedFile && selectedFile.type !== "application/json") {
      return (
        <div data-testid="warning-msg" className="text-red-500">
          invalid input, please upload json file
        </div>
      );
    }
  };

  return (
    <form className="block">
      <div>
        <label htmlFor="fileupload">Upload GEOJSON file:</label>
        <input
          type="file"
          data-testid="geojson-input"
          onChange={handeFileInputChange}
        />
      </div>
      <ErrorBox />
    </form>
  );
};

export default UploadForm;
