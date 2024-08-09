import logo from './Assets/icons8-code-50.png';
import cart from './Assets/icons8-cart-50.png';
export function Header()
{
    return (
        <div id='nav'>
            <div id='logo'>
                <img src={logo}></img>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <img src={cart}></img>
                </ul>
            </div>
        </div>
    );
}

