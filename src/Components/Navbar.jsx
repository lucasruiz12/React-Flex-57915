import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return <div className="navbar">
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contact</h4></Link>
        <CartWidget/>
    </div>
}

export default Navbar