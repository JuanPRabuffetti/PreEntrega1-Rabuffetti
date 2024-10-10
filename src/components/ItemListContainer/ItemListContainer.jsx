import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategoria } = useParams();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const productosRef = collection(db, "productos");
                const consulta = idCategoria 
                    ? query(productosRef, where("idCat", "==", idCategoria)) 
                    : productosRef;

                const res = await getDocs(consulta);
                const productosArray = res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                setProductos(productosArray);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerProductos();
    }, [idCategoria]);

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </>
    );
};

export default ItemListContainer;