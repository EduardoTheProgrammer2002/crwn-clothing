import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} product={cartItem}/>)
                }
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown;