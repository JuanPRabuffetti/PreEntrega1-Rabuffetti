import { useState } from "react"
import './Contador.css'


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    return (
        <>
            <div className="contador-container">
                <button className="contador-boton" onClick={restarContador}> - </button>
                <strong className="contador-numero">{contador}</strong>
                <button className="contador-boton" onClick={sumarContador}> + </button>
            </div>

            <button className="agregar-carrito-boton" onClick={() => funcionAgregar(contador)}>
                Agregar al carrito
            </button>
        </>
    );
};

export default Contador;