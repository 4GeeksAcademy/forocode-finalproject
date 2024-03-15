// ModalProfileUsername.jsx
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { IconUser } from "@tabler/icons-react";
const ModalProfileUsername = ({
    // Indica si el modal debe mostrarse o no
    show,
    // Función para cerrar el modal
    handleClose,
    // Tipo de entrada para determinar qué contenido mostrar en el modal
    inputType,
    // Función para guardar los cambios
    handleSave,
    // Título para modal
    title,
    updateChangesSaved,
}) => {
    const { actions, store } = useContext(Context);
    const [newUsername, setNewUsername] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleSubmitUsername = async () => {
        try {
            // Obtener el token del estado
            const token = store.token;

            // Enviar la solicitud para cambiar el correo electrónico utilizando el token obtenido
            const { success, error } = await actions.changeUsername(token, newUsername);

            if (success) {
                // Mostrar alerta de éxito
                setAlertMessage("Tu nombre de usuario se ha actualizado.");
                setAlertType("success");
                // Vaciar los campos de entrada después de un envío exitoso
                updateChangesSaved(true);
                setNewUsername("");
            } else {
                // Mostrar alerta de error
                setAlertMessage(error || "Error al cambiar el nombre de usuario. Por favor, inténtalo de nuevo.");
                setAlertType("danger");
            }
        } catch (error) {
            // Manejar cualquier error que ocurra al obtener el token del usuario
            console.error("Error al cambiar el nombre de usuario", error);
            setAlertMessage("Error al cambiar el nombre de usuario. Por favor, inténtalo de nuevo.");
            setAlertType("danger");
        }
    };

    return (
        <div
            className={`modal fade ${show ? "show" : ""}`}
            tabIndex="-1"
            aria-hidden={!show}
        >
            {/* Modal*/}
            <div className="modal-dialog modal-dialog-centered border-0 modalbody">
                {/* Modal Content*/}
                <div className="modal-content p-3 m-auto">
                    {/* Modal Header*/}
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    {/* Modal Body*/}
                    <div className="m-auto mt-2">
                        <p className=" fw-bold  pt-2  w-100" htmlFor="confirmnewUsername">
                            Confirmar nuevo nombre de usuario
                        </p>
                    </div>
                    <div className="mt-2 ">
                        <div className="form group w-75 m-auto  ">
                            <IconUser stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="icon" strokeLinejoin="round" strokeLinecap="round" />
                            <input className="form-control inputSignUpandRegister " id="newUsername" placeholder="username" rows="1" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    {/* Modal Footer*/}
                    {/* Modal Footer*/}
                    <div className="mt-4 mb-2 ">
                        <button className="btn  btn-primary text-white  buttonModal m-auto  text-center" onClick={handleSubmitUsername}>
                            Confirmar  <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </div >
                    {/* Mostrar alerta si hay mensaje */}
                    {alertMessage && (
                        <div className={`alert alert-${alertType}`} role="alert">
                            {alertMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalProfileUsername;
