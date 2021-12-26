import React from 'react';
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

const Navibar = () => {
    return (
        <Navbar color='dark' dark expand='md' container='fluid'>  
            <NavbarBrand className='me-auto' href='/'>PASSME</NavbarBrand>
            <NavbarText>
            <NavbarToggler 
                className="me-2"
                onClick={function noRefCheck(){}}  
            />
            <Collapse navbar>
                <Nav className='me-auto' navbar>
                    <NavItem>
                        <NavLink href='/users'>
                            회원관리
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown inNavbar nav >
                        <DropdownToggle caret nav  >
                            게시물관리
                        </DropdownToggle>
                        <DropdownMenu right dark >
                            <DropdownItem href='/bbs/notice' className={{fontColor: 'dark'}} >
                                공지사항
                            </DropdownItem>
                            <DropdownItem href='/bbs/bbs'>
                                자유게시판
                            </DropdownItem>
                            <DropdownItem href='/bbs/bbs'>
                                질문게시판
                            </DropdownItem>
                            <DropdownItem href='/bbs/bbs'>
                                합격수기
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown
                        inNavbar nav
                    >
                        <DropdownToggle caret nav>
                            콘텐츠관리
                        </DropdownToggle>
                        <DropdownMenu right dark>
                            <DropdownItem href='/contents/ncs'>
                                NCS
                            </DropdownItem>
                            <DropdownItem href='/contents/psat'>
                                PSAT
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </NavbarText>
        </Navbar>
    );
};

export default Navibar;