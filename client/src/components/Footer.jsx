import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Footer =() => {
    return(
        <>
        <footer>
            <p>Copyright © 2024 SLO Stone Properties, LLC - All Rights Reserved.</p>
            {Auth.loggedIn() ? (
                <Link id="login"  onClick={Auth.logout}>Admin Logout</Link>
            ) : (
            <Link id="login" to="/admin/login">Admin Login</Link>
            )}
        </footer>
        </>
    )
}

export default Footer;