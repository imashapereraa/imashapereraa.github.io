import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

const NavBrand = styled(Navbar.Brand)`
  margin-left: 0;
  font-family: Rubik !important;
  font-size:200%;
  
`;
const NavBarList = styled(Nav)`
  margin-left: 0;
  font-family: Rubik !important;
  
`;

export const NavBar = ({ }) => {
	return (
		<Navbar expand="lg">
			<Container fluid>
				<NavBrand href="#home">Imasha's Corner</NavBrand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<NavBarList className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Connect with me!</Nav.Link>
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Calculator</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.2">Fitness Tracker</NavDropdown.Item>
						</NavDropdown>
					</NavBarList>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
