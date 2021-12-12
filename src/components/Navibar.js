import React from 'react';

const Navibar = () => {
    return (
        <nav
            className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'
        >
            <div
                className='container'
            >
                <a
                    className='navbar-brand'
                >
                    PASSME ADMIN
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target="#mobile-nav"
                >
                    <span className='navbar-toggler-icon' />
                </button>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" herf="register.html">
                            게시물관리
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" herf="login.html">
                            콘텐츠관리
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" herf="login.html">
                            회원관리
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navibar;