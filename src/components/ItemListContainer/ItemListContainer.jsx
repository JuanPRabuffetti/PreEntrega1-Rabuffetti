import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategorias } from '../../../asyncmock'; 
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams()

  useEffect(() => {
      const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

      funcionProductos(idCategoria)
      .then(res => setProductos(res))
      
  }, [idCategoria])

  return (
      <>
          <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
          <ItemList productos={productos} />
      </>
  )
}

export default ItemListContainer 