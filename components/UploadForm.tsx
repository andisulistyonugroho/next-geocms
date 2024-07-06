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
        <div data-testid="warning-msg" className="text-red-500 mt-3">
          invalid input, please upload json file
        </div>
      );
    } else {
      return null;
    }
  };

  const SubmitButton = () => {
    if (
      !selectedFile ||
      (selectedFile && selectedFile.type !== "application/json")
    ) {
      return null;
    }

    return (
      <button
        type="submit"
        className="mt-5 w-full px-3 py-1.5 rounded-md bg-indigo-600 text-sm font-semibold"
      >
        Submit
      </button>
    );
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
      <SubmitButton />
    </form>
  );
};

export default UploadForm;
