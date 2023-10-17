import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
            <nav className="shadow-lg py-6 rounded-md" >
                <ul className="flex justify-center gap-5 text-xl" >
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/addServices" >Add Services</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;