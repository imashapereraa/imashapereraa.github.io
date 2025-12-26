

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

const MatchaHighlight = styled.mark`
  background-color: #c0cfb2;
  a:hover {
    color: white !important;
    opacity: 90% !important;
  }
`;

const RowTopMargin = styled(Container)`
  margin-top: 15%;
`;

const ProjectLink = styled.a`
  text-decoration: underline;
  text-decoration-color: #b0acba;
  color: black;
  &:hover {
    opacity: 0.5;
  }
`;

const projects = [
  {
    name: "Personal Portfolio Website",
    link: "https://imashapereraa.github.io/"
  },
  {
    name: "2D Boids Simulation",
    link: "/boids"
  }
];

function CodingAdventures() {
  return (
    <Container fluid>
      <RowTopMargin>
        <Col md={{ span: 6, offset: 2 }}>
          <Row>
            <h4>Here are some of my <MatchaHighlight>coding adventures</MatchaHighlight>.</h4><br /><br />
              <p>{projects.map((project, idx) => (
                <span key={idx}>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</ProjectLink><br />
                </span>
              ))}
            </p>
          </Row>
        </Col>
      </RowTopMargin>
    </Container>
  );
}

export default CodingAdventures;