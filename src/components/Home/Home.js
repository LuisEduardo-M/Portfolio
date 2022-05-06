import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home_container}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>

                        <h1 className="display-5">
                            Prazer, sou<br />
                            <span className="display-2">Luis Eduardo Meduna Cabreira</span>
                        </h1><br />

                        <p className='lead'>Estudante de Sistemas de Informação pela UniFOA em Volta Redonda. Atualmente estou masterizando tecnologias que envolvem Web Development.</p>
                    </div>

                    <div className='col-md-6'>
                        <div className={styles.image_container}>
                            <img className='img-fluid' src='./profile.jpg' alt="Profile" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;