import { useRef, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";
import ContactMenu from "../../components/atoms/ContactMenu/ContactMenu.tsx";
import useOutsideClickCheck from "../../hooks/OutsideClickCheck.ts"

const MatchaHighlight = styled.mark`
  background-color: #c0cfb2;

  a:hover {
    color: white !important;
    opacity: 90% !important;
  }
`;

const ConnectHover = styled.a`
  text-decoration: underline;
  text-decoration-color: #b0acba;
  color:black;
  
  &:hover {
    opacity: 0.5;
  }
`;

const RowTopMargin = styled(Container)`
  margin-top: 15%;
`;


function LandingPage({ }) {
  const [showContactMenu, setShowContactMenu] = useState<Boolean>(false)
  const contactMenuRef = useRef(null);

  const handleConnectClick = () => {
    setShowContactMenu(prevState => !prevState);
  };
  const closeContactMenu = () => {
    setShowContactMenu(false);
  };

  useOutsideClickCheck(contactMenuRef, closeContactMenu);

  return (
    <>
      <Container fluid>
        <RowTopMargin>
          <Col md={{ span: 5, offset: 2 }}>
            <h4>Imasha_Perera</h4><br/>
            <p>Software engineer and IT graduate from Monash University,
              currently working for National Australian Bank. <br/><br/>
              Experienced in full stack development (spring java and react focused). <br/><br/>
              Take a look at my coding <MatchaHighlight><a>adventures</a></MatchaHighlight> or feel free to <ConnectHover onClick={handleConnectClick}>connect with me</ConnectHover>.
            </p>
          </Col>
        </RowTopMargin>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            {showContactMenu && <div ref={contactMenuRef}><ContactMenu/></div>}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LandingPage;