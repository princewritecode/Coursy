import logo from '../../Assets/icons8-code-50.png';
import cart from '../../Assets/icons8-cart-50.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export function Header()
{
    const cartItems = useSelector((store) =>
    {
        return store.cart.items;
    });

    console.log(cartItems);
    return (
        <div className='flex justify-between shadow-md' >
            <div className='p-4 m-4'>
                <img src={logo}></img>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4  mx-4 hover:bg-gray-200 bg-gray-100 border rounded-md'><Link to="/">Home</Link></li>
                    <li className='px-4 mx-4   hover:bg-gray-200 bg-gray-100 border rounded-md'><Link to="/browse/roadmap">Roadmap</Link></li>
                    <li className='px-4  mx-4  hover:bg-gray-200 bg-gray-100 border rounded-md'><Link to="/browse/about">About</Link></li>
                    <li className='px-4  mx-4    hover:bg-gray-200 bg-gray-100 border rounded-md'><Link to='/browse/cart'>Cart({cartItems.length})</Link></li>

                </ul>
            </div>
        </div>
    );
}

