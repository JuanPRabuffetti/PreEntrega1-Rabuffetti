import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img className="carrito-icono" src="./public/img/carrito.png" alt="Carrito de compras" />
      </Link>
      {
        cantidadTotal > 0 && <span className="cantidad-total">{cantidadTotal}</span>
      }
    </div>
  );
}

export default CartWidget;