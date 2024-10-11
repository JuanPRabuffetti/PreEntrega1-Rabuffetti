import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './CheckOut.css'

const Checkout = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        emailConfirmacion: ""
    });
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const manejadorFormulario = (e) => {
        e.preventDefault();
        const { nombre, apellido, telefono, email, emailConfirmacion } = formData;

        // Validación de los campos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos o moriras maldito!");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden, maildito insecto");
            return;
        }

        // Crear el objeto de la orden
        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        // Guardar la orden en la base de datos
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setFormData({
                    nombre: "",
                    apellido: "",
                    telefono: "",
                    email: "",
                    emailConfirmacion: ""
                });
                setError("");
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden!");
            });
    };

    return (
        <div className="checkout-container">
            <h2>Checkout:</h2>
    
            <form onSubmit={manejadorFormulario}>
                {carrito.map((producto) => (
                    <div key={producto.item.id} className="cart-item">
                        <p>{producto.item.nombre}</p>
                        <p>{producto.item.precio} x {producto.cantidad}</p>
                        <p>Total: ${producto.item.precio * producto.cantidad}</p>
                        <hr />
                    </div>
                ))}
    
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        onChange={handleChange}
                        value={formData.nombre}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        onChange={handleChange}
                        value={formData.apellido}
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        onChange={handleChange}
                        value={formData.telefono}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="form-group">
                    <label>Email Confirmación</label>
                    <input
                        type="email"
                        name="emailConfirmacion"
                        onChange={handleChange}
                        value={formData.emailConfirmacion}
                    />
                </div>
    
                {error && <p className="error-message">{error}</p>}
    
                <button type="submit" className="submit-button">Confirmar Compra</button>
                {ordenId && (
                    <strong className="confirmation-message">
                        ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                    </strong>
                )}
            </form>
        </div>
    );
};
export default Checkout;

