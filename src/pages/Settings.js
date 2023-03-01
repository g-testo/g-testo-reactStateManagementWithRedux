const Settings = ({ users, theme, currentUserIndex, setCurrentUserIndex, privacyMode, setPrivacyMode, setTheme }) => {
    console.log(users);
    
    return (
        <>
            <h2>Settings</h2>
            <div>
                <label htmlFor="user">User</label>
                <select
                    id="user"
                    value={currentUserIndex}
                    onChange={(event) => {
                        setCurrentUserIndex(parseInt(event.target.value));
                    }}
                >
                    {users.map((userName, index) => {
                        return (
                            <option key={index} value={index}>
                                {userName}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="theme">Theme</label>
                <select
                    id="theme"
                    value={theme}
                    onChange={(event) => {
                        setTheme(event.target.value);
                    }}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <label htmlFor="privacyMode">Privacy Mode</label>
                <input
                    id="privacyModeMode"
                    type="checkbox"
                    checked={privacyMode}
                    onChange={(event) => {
                        setPrivacyMode(event.target.checked);
                    }}
                />
            </div>
        </>
    );
};

export default Settings;
