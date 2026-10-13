import "./ScreenshotPreview.css";

function ScreenshotPreview({ file, onRemove }) {
  if (!file) {
    return (
      <section className="screenshot-preview empty-preview">
        <div className="preview-empty-icon">◫</div>

        <h3>No Screenshot Selected</h3>

        <p>
          Upload a UPI screenshot to preview it before analysis.
        </p>
      </section>
    );
  }

  const imageUrl = URL.createObjectURL(file);

  return (
    <section className="screenshot-preview">
      <div className="preview-header">
        <div>
          <h3>Screenshot Preview</h3>
          <p>Review the uploaded image before analysis</p>
        </div>

        <button
          className="remove-screenshot"
          type="button"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>

      <div className="preview-image-container">
        <img
          src={imageUrl}
          alt="Uploaded UPI screenshot"
          className="preview-image"
        />
      </div>

      <div className="preview-file-info">
        <span>{file.name}</span>
        <span>
          {(file.size / (1024 * 1024)).toFixed(2)} MB
        </span>
      </div>
    </section>
  );
}

export default ScreenshotPreview;