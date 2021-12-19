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
            
            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu2' data-bs-toggle='dropdown' aria-expanded='false' >
                    게시물관리
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
                    <li><button className='dropdown-item' type='button'>공지사항</button></li>
                    <li><button className='dropdown-item' type='button'>게시판</button></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    회원관리
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button">회원정보</button></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    콘텐츠관리
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button">NCS</button></li>
                    <li><button className="dropdown-item" type="button">PSAT</button></li>
                    <li><button className="dropdown-item" type="button">학습지</button></li>

                </ul>
            </div>
        </nav>
    );
};

export default Navibar;