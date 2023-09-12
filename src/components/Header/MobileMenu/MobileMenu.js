import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MobileMenu.css';
import logo from '../../Footer/logo.svg';
import mobile from './mobile.svg';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { signOut } from '../../../requests/profile';

function LoginButton() {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  const TitleButton = companyInfo ? 'Выйти': 'Войти'  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleClick() {
    navigate("/login");
    if (companyInfo) {
      dispatch(signOut());
    } 
  }

return (
  <button className='button' type="button" onClick={handleClick}>
    {TitleButton}
  </button>
);
}

function ReturnMain() {
  function handleClick(evt) {
    navigate("/");
  }
  const navigate = useNavigate();

  return (
    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
  );
}  

function MobileMenu() {
  const expand = false
  return (    
        
        <Navbar key={expand}  expand={expand} className="mb-3 MobileMenu">
          <Container fluid  >
            <Navbar.Toggle  bg="*"  aria-controls={`offcanvasNavbar-expand-${expand}`} className='own MobileMenu border-0 shadow-none'>
              <img src={mobile} alt='mobile' />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='MobileMenu__header closeButton d-flex'>
              <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
              </Offcanvas.Header>
              <Offcanvas.Body className='MobileMenu__body'>
                
                <Nav className="text-center nav">
                  <ReturnMain />
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>Тарифы</Nav.Link>
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>FAQ</Nav.Link>
                </Nav>
                <a className='MobileMenu__link' href='XXX' >Зарегистрироваться</a>
                <LoginButton />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
  );
}

export default MobileMenu;
