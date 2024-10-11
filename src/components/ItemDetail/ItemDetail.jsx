import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ItemDetail.css';
import Contador from '../Contador/Contador';
 import { CarritoContext } from '../../context/CarritoContext';
 import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarAlCarrito} = useContext(CarritoContext)
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
        toast.success("Su compra fue enviada al carrito", {
            autoClose: 1000,
            theme: "dark",
            position: "top-right"
        });
    };

    return (
        <div className="contenedorItem">
            <h2>{`Nombre: ${nombre}`}</h2>
            <h3>{`Precio: $${precio}`}</h3>
            <h3>{`ID: ${id}`}</h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            {agregarCantidad > 0 ? (
                <Link to="/cart" className="terminarCompra">
                    Terminar Compra
                </Link>
            ) : (
                <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
        </div>
    );
};

export default ItemDetail;