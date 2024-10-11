import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carrito-vacio">
                <h2>No hay productos en el carrito. Compra o vete!!!</h2>
                <Link to="/" className="ver-productos">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-items">
                {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            </div>

            <div className="cart-resumen">
                <h3>Total: ${total}</h3>
                <h3>Cantidad Total: {cantidadTotal}</h3>
                <button onClick={() => vaciarCarrito()} className="vaciar-carrito">Vaciar Carrito</button>
                <Link to="/checkout" className="finalizar-compra">Finalizar Compra</Link>
            </div>
        </div>
    );
};

export default Cart;