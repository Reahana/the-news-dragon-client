import React, { useContext } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Menu = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <Container>
            
            <Navbar collapseOnSelect expand="lg"  bg="light" data-bs-theme="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                       
                           <Link to='/'> Home</Link>    
            
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                        
                    </Nav>
                    <Nav>
                      { user &&
                         
                          <FaCircleUser style={{fontSize: '2rem'}} />
                        
                      }
                        
                           { user ?
                            <Button onClick={handleLogOut} variant="dark">Logout</Button>  :
                           <Link to='/login'>
                            <Button variant="dark">Login</Button>
                           </Link>
                           }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Menu;