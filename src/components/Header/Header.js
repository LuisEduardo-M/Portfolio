import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className='container '>
                <div className='row d-flex align-items-center'>

                    <div className='col-6 '>
                        <h1><a href='/'>Luis Eduardo M.</a></h1>
                    </div>

                    <div className='col-6'>
                        <nav>
                            <ul>
                                <li><a href='/'>resumo</a></li>
                                <li><a href='/'>contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
