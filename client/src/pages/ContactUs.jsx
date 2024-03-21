import { Link } from "react-router-dom";

function ContactUs() {
    return(
        <main className="flex-parent contact-page">
            <h3>Contact Us</h3>
            <Link to="mailto:LorrieStone@mac.com">LorrieStone@mac.com</Link>
        </main>
    )
};

export default ContactUs;