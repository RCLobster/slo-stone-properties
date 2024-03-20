import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Footer =() => {
    return(
        <>
        <footer>
            {Auth.loggedIn() ? (
                <Link onClick={Auth.logout}>Admin Logout</Link>
            ) : (
            <Link to="/admin/login">Admin Login</Link>
            )}
        </footer>
        </>
    )
}

export default Footer;