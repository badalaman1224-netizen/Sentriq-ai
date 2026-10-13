import { useState } from "react";
import "./GeneralSettings.css";

function GeneralSettings({
  settings,
  updateSettings,
}) {
  const [savedMessage, setSavedMessage] = useState("");

  const update = (key, value) => {
    updateSettings(key, value);
    setSavedMessage("");
  };

  const saveSettings = () => {
    localStorage.setItem(
      "sentriqai-settings",
      JSON.stringify(settings)
    );

    setSavedMessage("Settings saved successfully.");

    setTimeout(() => {
      setSavedMessage("");
    }, 2500);
  };

  const resetSettings = () => {
    updateSettings("notifications", true);
    updateSettings("highRiskAlerts", true);
    updateSettings("emailReports", false);
    updateSettings("autoAnalysis", true);
    updateSettings("darkMode", false);
    updateSettings("riskSensitivity", "Balanced");
    updateSettings("dataRetention", "90 days");
    updateSettings("fullName", "mmmm");
    updateSettings("email", "admin@sentriqai.local");

    setSavedMessage("Settings restored to default.");

    setTimeout(() => {
      setSavedMessage("");
    }, 2500);
  };

  return (
    <div className="settings-stack">

      {/* ACCOUNT */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div>
            <span>ACCOUNT</span>
            <h3>Profile Information</h3>
            <p>
              Update the account information used by SentriqAI.
            </p>
          </div>
        </div>

        <div className="profile-settings">
          <div className="profile-avatar-large">
            {settings.fullName?.charAt(0).toUpperCase() || "B"}
          </div>

          <div className="profile-fields">
            <div className="settings-field">
              <label>Full Name</label>

              <input
                type="text"
                value={settings.fullName}
                onChange={(event) =>
                  update("fullName", event.target.value)
                }
              />
            </div>

            <div className="settings-field">
              <label>Email Address</label>

              <input
                type="email"
                value={settings.email}
                onChange={(event) =>
                  update("email", event.target.value)
                }
              />
            </div>

            <div className="settings-field">
              <label>Role</label>

              <input
                type="text"
                value="Administrator"
                readOnly
              />
            </div>

            <div className="settings-field">
              <label>Account ID</label>

              <input
                type="text"
                value="SNT-ADMIN-001"
                readOnly
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div>
            <span>SECURITY</span>
            <h3>Security Preferences</h3>
            <p>
              Control security notifications and suspicious activity alerts.
            </p>
          </div>
        </div>

        <div className="settings-options">

          <div className="setting-row">
            <div className="setting-row-info">
              <strong>Security Notifications</strong>
              <span>
                Receive notifications for suspicious activity.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                settings.notifications ? "on" : ""
              }`}
              onClick={() =>
                update(
                  "notifications",
                  !settings.notifications
                )
              }
            >
              <span></span>
            </button>
          </div>

          <div className="setting-row">
            <div className="setting-row-info">
              <strong>High-Risk Transaction Alerts</strong>
              <span>
                Show alerts for high-risk transactions.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                settings.highRiskAlerts ? "on" : ""
              }`}
              onClick={() =>
                update(
                  "highRiskAlerts",
                  !settings.highRiskAlerts
                )
              }
            >
              <span></span>
            </button>
          </div>

          <div className="setting-row">
            <div className="setting-row-info">
              <strong>Email Security Reports</strong>
              <span>
                Enable email report preferences.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                settings.emailReports ? "on" : ""
              }`}
              onClick={() =>
                update(
                  "emailReports",
                  !settings.emailReports
                )
              }
            >
              <span></span>
            </button>
          </div>

        </div>
      </section>

      {/* AI DETECTION */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div>
            <span>AI DETECTION</span>
            <h3>Fraud Detection Preferences</h3>
            <p>
              Configure how SentriqAI should prepare risk assessments.
            </p>
          </div>
        </div>

        <div className="preference-grid">

          <div className="settings-field">
            <label>Risk Sensitivity</label>

            <select
              value={settings.riskSensitivity}
              onChange={(event) =>
                update(
                  "riskSensitivity",
                  event.target.value
                )
              }
            >
              <option>Conservative</option>
              <option>Balanced</option>
              <option>Aggressive</option>
            </select>

            <small>
              Current mode: {settings.riskSensitivity}
            </small>
          </div>

          <div className="settings-field">
            <label>Data Retention</label>

            <select
              value={settings.dataRetention}
              onChange={(event) =>
                update(
                  "dataRetention",
                  event.target.value
                )
              }
            >
              <option>30 days</option>
              <option>90 days</option>
              <option>180 days</option>
              <option>1 year</option>
            </select>

            <small>
              Current retention: {settings.dataRetention}
            </small>
          </div>

        </div>

        <div className="setting-row detection-row">
          <div className="setting-row-info">
            <strong>Automatic Screenshot Analysis</strong>
            <span>
              Prepare analysis automatically after screenshot upload.
            </span>
          </div>

          <button
            type="button"
            className={`toggle ${
              settings.autoAnalysis ? "on" : ""
            }`}
            onClick={() =>
              update(
                "autoAnalysis",
                !settings.autoAnalysis
              )
            }
          >
            <span></span>
          </button>
        </div>
      </section>

      {/* APPEARANCE */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div>
            <span>INTERFACE</span>
            <h3>Appearance</h3>
            <p>
              Select the interface theme.
            </p>
          </div>
        </div>

        <div className="appearance-options">

          <button
            type="button"
            className={`theme-option ${
              !settings.darkMode ? "selected" : ""
            }`}
            onClick={() =>
              update("darkMode", false)
            }
          >
            <div className="theme-preview light-preview">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <strong>Light</strong>
              <span>Light interface</span>
            </div>
          </button>

          <button
            type="button"
            className={`theme-option ${
              settings.darkMode ? "selected" : ""
            }`}
            onClick={() =>
              update("darkMode", true)
            }
          >
            <div className="theme-preview dark-preview">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <strong>Dark</strong>
              <span>Dark interface</span>
            </div>
          </button>

        </div>
      </section>

      {/* ACTIONS */}
      <div className="settings-save-bar">
        <div className="save-message-area">
          {savedMessage && (
            <span className="save-success">
              ✓ {savedMessage}
            </span>
          )}
        </div>

        <div className="settings-action-buttons">
          <button
            type="button"
            className="reset-settings-button"
            onClick={resetSettings}
          >
            Reset
          </button>

          <button
            type="button"
            className="save-settings-button"
            onClick={saveSettings}
          >
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}

export default GeneralSettings;