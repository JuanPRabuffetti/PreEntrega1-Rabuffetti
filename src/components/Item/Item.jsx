import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} className="producto-imagen" />
      <h3 className="producto-nombre">Nombre: {nombre}</h3>
      <p className="producto-precio">Precio: ${precio}</p>
      <p className="producto-id">ID: {id}</p>
      <p className="producto-stock">Stock: {stock}</p>
      <Link to={`/item/${id}`} className="ver-detalles">Ver Detalles</Link>
    </div>
  );
}

export default Item;