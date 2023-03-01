import { Outlet, Link } from "react-router-dom";

import privateProfilePlaceholder from "./assets/images/private_profile_placeholder.png";
import publicProfilePlaceholder from "./assets/images/public_profile_placeholder.png";

function Layout({ currentUser, privacyMode }) {
    return (
        <div>
            <header>
                <img width="100" src={privacyMode ? privateProfilePlaceholder : publicProfilePlaceholder} alt="Profile" />
                <h1>{currentUser}</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

export default Layout;
