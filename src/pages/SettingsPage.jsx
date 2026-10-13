import ModuleStatus from "../components/settings/ModuleStatus";
import GeneralSettings from "../components/settings/GeneralSettings";

import "./SettingsPage.css";

function SettingsPage({
    settings,
    updateSettings,
    onNavigate,
}) {
    return (
        <div className="settings-page">

            <header className="settings-page-header">
                <div>
                    <span>SENTRIQAI CONFIGURATION</span>

                    <h1>Settings</h1>

                    <p>
                        Manage application preferences and verify
                        every SentriqAI module from one place.
                    </p>
                </div>

                <div className="settings-version">
                    <span>VERSION</span>
                    <strong>1.0.0</strong>
                </div>
            </header>

            <GeneralSettings
                settings={settings}
                updateSettings={updateSettings}
            />

            <ModuleStatus
                onNavigate={onNavigate}
            />

        </div>
    );
}

export default SettingsPage; 