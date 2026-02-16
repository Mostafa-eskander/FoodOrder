import { useContext } from 'react';

import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';


export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItem = cartCtx.items.reduce((totalNumberOfItmes, item) => {
        return totalNumberOfItmes + item.quantity;
    }, 0);
    
    function handelShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A restaurant Logo' />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnlay onClick={handelShowCart}>
                    Cart ({totalCartItem})
                </Button>
            </nav>
        </header>
    );
};