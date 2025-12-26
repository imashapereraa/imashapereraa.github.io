import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BoidsGamePage() {
  return (
    <Container fluid>
      <Row style={{ marginTop: '5%' }}>
        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: 'center' }}>
          <h3>2D Boids Simulation</h3>
          <iframe
            src="/2d-boids/export/2D Boids.html"
            width="900"
            height="600"
            style={{ border: 'none', background: '#c0cfb2', borderRadius: '1em' }}
            allowFullScreen
            title="2D Boids Godot Game"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BoidsGamePage;
