import logo from '../../Assets/icons8-code-50.png';
import cart from '../../Assets/icons8-cart-50.png';
import { Link } from 'react-router-dom';

export function Header()
{
    return (
        <div id='nav'>
            <div id='logo'>
                <img src={logo}></img>
            </div>
            <div id='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/roadmap">Roadmap</Link></li>
                    <li><Link>Cart</Link></li>
                </ul>
            </div>
        </div>
    );
}
