import React from 'react';

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
    </div>
  );
};

export default ItemDetail;