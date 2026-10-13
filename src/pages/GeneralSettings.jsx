import { useState } from "react";

import "./GeneralSettings.css";

function GeneralSettings() {
  const [notifications, setNotifications] = useState(true);
  const [autoAnalysis, setAutoAnalysis] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="general-settings">
      <div className="general-settings-header">
        <div>
          <span>APPLICATION SETTINGS</span>
          <h3>General Preferences</h3>
          <p>
            Configure how SentriqAI behaves on this device.
          </p>
        </div>
      </div>

      <div className="settings-list">
        <div className="setting-item">
          <div>
            <strong>Security Notifications</strong>
            <span>
              Receive alerts when suspicious activity is detected.
            </span>
          </div>

          <button
            type="button"
            className={`toggle ${
              notifications ? "on" : ""
            }`}
            onClick={() =>
              setNotifications((previous) => !previous)
            }
            aria-label="Toggle security notifications"
          >
            <span></span>
          </button>
        </div>

        <div className="setting-item">
          <div>
            <strong>Automatic Analysis</strong>
            <span>
              Automatically prepare analysis after a file is uploaded.
            </span>
          </div>

          <button
            type="button"
            className={`toggle ${
              autoAnalysis ? "on" : ""
            }`}
            onClick={() =>
              setAutoAnalysis((previous) => !previous)
            }
            aria-label="Toggle automatic analysis"
          >
            <span></span>
          </button>
        </div>

        <div className="setting-item">
          <div>
            <strong>Dark Mode</strong>
            <span>
              Interface theme preference for SentriqAI.
            </span>
          </div>

          <button
            type="button"
            className={`toggle ${darkMode ? "on" : ""}`}
            onClick={() =>
              setDarkMode((previous) => !previous)
            }
            aria-label="Toggle dark mode"
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className="system-information">
        <div>
          <span>Application</span>
          <strong>SentriqAI</strong>
        </div>

        <div>
          <span>Version</span>
          <strong>1.0.0</strong>
        </div>

        <div>
          <span>Environment</span>
          <strong>Development</strong>
        </div>

        <div>
          <span>AI Engine</span>
          <strong>Ready</strong>
        </div>
      </div>
    </section>
  );
}

export default GeneralSettings;