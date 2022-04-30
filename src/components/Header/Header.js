import React from 'react'
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className={styles.header_container}>

                        <h1><a href='/'>Luis Eduardo</a></h1>

                        <div className='col-md-3'>
                            <nav>
                                <ul>
                                    <li><a href='/'>contato</a></li>
                                    <li><a href='/'>resumo</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;