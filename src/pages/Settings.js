
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, togglePrivacyMode } from "../reducers/uiSlice";
import { updateCurrentUserIndex } from "../reducers/userSlice";

const Settings = () => {
    const dispatch = useDispatch();
    const { users, currentUserIndex } = useSelector((state) => state.user);
    const { theme, privacyMode } = useSelector((state) => state.ui);

    return (
        <>
            <h2>Settings</h2>
            <div>
                <label htmlFor="user">User</label>
                <select
                    id="user"
                    value={currentUserIndex}
                    onChange={(event) => {
                        dispatch(updateCurrentUserIndex(parseInt(event.target.value)));
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
                    onChange={() => {
                        dispatch(toggleTheme());
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
                    onChange={() => {
                        dispatch(togglePrivacyMode());
                    }}
                />
            </div>
        </>
    );
};

export default Settings;
