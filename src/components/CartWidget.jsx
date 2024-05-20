import CartIcon from "./CartIcon";
import './CartWidget.css'

function CartWidget(){
    return(
        <div className = "cart">
            <CartIcon ancho={45} height={45}/>
            <span className="cart-num">5</span>
        </div>
    );
}

export default CartWidget;