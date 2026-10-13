import { useRef } from "react";
import "./ScreenshotUploader.css";

function ScreenshotUploader({ onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    onFileSelect(file);
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="screenshot-uploader">
      <div className="uploader-icon">⌁</div>

      <h3>Upload UPI Screenshot</h3>

      <p>
        Upload a UPI payment screenshot and SentriqAI will
        analyze it for suspicious transaction patterns.
      </p>

      <button
        className="browse-button"
        type="button"
        onClick={handleBrowse}
      >
        Choose Screenshot
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
        hidden
      />

      <span className="upload-hint">
        PNG, JPG or WEBP • Maximum 10 MB
      </span>
    </section>
  );
}

export default ScreenshotUploader;