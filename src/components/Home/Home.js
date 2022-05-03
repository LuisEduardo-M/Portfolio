import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home_container}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>

                        <h1>
                            Prazer, sou<br />
                            <span>Luis Eduardo Meduna Cabreira</span>
                        </h1>

                        <p>Estudante de Sistemas de Informação pela UniFOA em Volta Redonda. Atualmente estou masterizando tecnologias que envolvem Web Development.</p>
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