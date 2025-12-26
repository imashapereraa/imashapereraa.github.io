import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BoidsGamePage() {
  return (
    <Container fluid>
      <Row style={{ marginTop: '5%' }}>
        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: 'center' }}>
          <h3>2D Boids Simulation</h3>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 900,
            margin: '0 auto',
            aspectRatio: '3/2',
            background: '#c0cfb2',
            borderRadius: '1em',
            overflow: 'hidden',
          }}>
            <iframe
              src="/2d-boids/2D Boids.html"
              style={{
                border: 'none',
                width: '100%',
                height: '100%',
                minHeight: 300,
                borderRadius: '1em',
                background: '#c0cfb2',
                display: 'block',
              }}
              allowFullScreen
              title="2D Boids Godot Game"
            />
          </div>
          <p style={{ fontSize: '0.95em', marginTop: '1em' }}>
            If the game does not load, <a href="/2d-boids/2D Boids.html" target="_blank" rel="noopener noreferrer">open it in a new tab</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BoidsGamePage;
