'use client'

import Image from 'next/image';
import styles from './Contact.module.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar lo que quieras hacer con los datos del formulario (por ejemplo, enviarlo a un servidor).
        console.log('Formulario enviado:', formData);
    };

    return (
        <div className={styles['contact-container']}>
            <div className={styles['upper']}>
                <h3 className={styles['tittle']}>Get your first consultation 100% free! Contact us!</h3>
                {/* <h3 className={styles['tittle']}>Contact us! </h3> */}

                <i className={`${styles['icon']} fa fa-users`}></i>
                <span className={styles['divider']}>
                </span>
            </div>

            <div className={styles['sub-container']}>

                <div className={styles['info']}>

                    <Image
                        src="https://media.istockphoto.com/id/481447633/photo/using-smart-phone.jpg?s=1024x1024&w=is&k=20&c=jpzy9UqYI_dIhocc-wQFv5gtcdOnJYkwXp40NXLWHRw="
                        alt="Imagen del carrusel"
                        width={600} // Ancho original en píxeles
                        height={400} // Alto original en píxeles
                        layout="intrinsic"
                        style={{
                            width: '100%',  // Ajuste de ancho al 65%
                            display: 'block', // Elimina los márgenes automáticos de imagen en línea
                            marginLeft: 'auto', // Centra la imagen horizontalmente
                            marginRight: 'auto', // Centra la imagen horizontalmente
                            borderRadius: 10
                        }}
                    />

                    {/* <hr style={{ marginTop: '10px', marginBottom: '10px',borderBottom: '2px solid #000' }} /> */}

                    {/* Información con líneas separadoras */}
                    {/* <div>
                        <p style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}><i className="fa fa-phone"></i>+569 5347 2293</p>
                        <p style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}><i className="fa fa-phone"></i>+569 8191 9306</p>
                        <p style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}><i className="fa fa-envelope"></i> cromero@teayudopyme.cl</p>
                        <p style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}><i className="fa fa-envelope"></i>nicolas.p@teayudopyme.cl</p>
                        <p style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}><i className="fa fa-map-marker"></i>Tocornal 252, Puente Alto, Santiago.</p>
                    </div> */}

                    <div>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center', marginTop:'15px' }}>
                            <i className="fa fa-phone" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>+1234 5347 2245</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-phone" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>+1234 8154 9306</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-envelope" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>contact@mc.company</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-envelope" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>customers@mc.company</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-map-marker" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>70 Street, St. Lewis, Texas.</span>
                        </p>
                    </div>
         

                </div>

                <div className={styles['form']}>

                    <form>

                        {/* Campo para Nombre */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formName">Name</label>
                            <input
                                type="text"
                                id="formName"
                                className="form-control"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Campo para Correo Electrónico */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formEmail">Email address</label>
                            <input
                                type="email"
                                id="formEmail"
                                className="form-control"
                                placeholder="Your Email"
                            />
                        </div>

                        {/* Campo para Teléfono */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formPhone">Phone</label>
                            <input
                                type="tel"
                                id="formPhone"
                                className="form-control"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        {/* Campo para Asunto (en inglés) */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formSubject">Subject</label>
                            <input
                                type="text"
                                id="formSubject"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>

                        {/* Campo para Mensaje (más grande) */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formMessage">Message</label>
                            <textarea
                                id="formMessage"
                                className="form-control"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        {/* Botón de Enviar */}
                        <button
                            data-mdb-ripple-init
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ backgroundColor: '#28a745' }}
                        >
                            Send
                        </button>
                    </form>



                </div>

            </div>


        </div>


    );



}