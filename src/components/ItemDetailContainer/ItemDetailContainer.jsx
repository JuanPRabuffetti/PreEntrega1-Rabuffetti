import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUnProducto } from '../../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id, idItem } = useParams(); // Obtener ambos id y idItem
  
  useEffect(() => {
    const itemId = id || idItem; // Usar id o idItem dependiendo de la ruta
    console.log("ID recibido desde useParams:", itemId);
    getUnProducto(itemId)
      .then((res) => {
        console.log("Producto encontrado:", res);
        setProducto(res);
      })
      .catch((err) => console.error(err));
  }, [id, idItem]); // Ejecutar el efecto cuando cambien id o idItem

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando detalles...</p>}
    </div>
  );
};

export default ItemDetailContainer;