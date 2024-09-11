import { useRef, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";
import ContactMenu from "../../components/atoms/ContactMenu/ContactMenu";
import useOutsideClickCheck from "../../hooks/OutsideClickCheck.ts"
import { CSSTransition } from 'react-transition-group';

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
  const [showContactMenu, setShowContactMenu] = useState<boolean>(false)
  const contactMenuRef = useRef<HTMLDivElement>(null);

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
          <Col md={{ span: 6, offset: 2 }}>
            <Row>
              <h4>Imasha_Perera</h4><br />
              <p>Software engineer and IT graduate from Monash University,
                currently working for National Australian Bank. <br /><br />
                Experienced in full stack development (spring java and react focused). <br /><br />
                Take a look at my coding <MatchaHighlight><a>adventures</a></MatchaHighlight> or feel free to <ConnectHover onClick={handleConnectClick}>connect with me</ConnectHover>.
              </p>
            </Row>
            <Row>
              <CSSTransition
                in={showContactMenu}
                timeout={300}
                classNames="fade"
                unmountOnExit
                nodeRef={contactMenuRef}
              >
                <div ref={contactMenuRef}><ContactMenu /></div>
              </CSSTransition>
            </Row>
          </Col>
        </RowTopMargin>

      </Container >
    </>
  )
}

export default LandingPage;