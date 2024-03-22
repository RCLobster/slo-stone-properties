import LoginForm from "../../components/LoginForm";
import  {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';


function AdminLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (Auth.loggedIn()) {
            navigate('/admin');
        }
    }, [navigate]);

    return(
        <div className="admin-login fade-in">
            <h3>Admin Login</h3>
            <LoginForm />
        </div>
    )
};

export default AdminLogin;