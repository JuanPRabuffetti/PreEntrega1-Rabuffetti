import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
      const fetchProducto = async () => {
          setLoading(true);
          try {
              const nuevoDoc = doc(db, "productos", idItem);
              const res = await getDoc(nuevoDoc);
              if (res.exists()) {
                  const data = res.data();
                  const nuevosProducto = { id: res.id, ...data };
                  setProducto(nuevosProducto);
              } else {
                  setError("El producto no existe");
              }
          } catch (err) {
              setError("Hubo un error al obtener los datos del producto");
              console.error(err);
          } finally {
              setLoading(false);
          }
      };

      fetchProducto();
  }, [idItem]);

  if (loading) {
      return <p>Cargando...</p>;
  }

  if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
      <div>
          {producto ? <ItemDetail {...producto} /> : <p>Producto no encontrado</p>}
      </div>
  );
};

export default ItemDetailContainer;