import React from "react";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact_container}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3">Fale Comigo</h1>
                    </div>

                    <div>
                        <p>Caso tenha alguma duvida fique a vontade para me enviar um e-mail ou mensagem pelo LinkedIn!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;