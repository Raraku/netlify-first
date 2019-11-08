import React from "react";
import viber from "../Martz90-Circle-Viber.ico";
import twitter from "../Twitter_Android.png";
import image2 from "../logo.svg";
import linkedin from "../linkedin-128.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Jumbotron,
  Carousel,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
  CardDeck,
  CardColumns,
  CardGroup,
  Badge
} from "react-bootstrap";

function Home() {
  const frontend = [
    "React",
    "Bootstrap",
    "Semantic-UI",
    "Javascript",
    "Sass",
    "LESS"
  ];
  const backend = [
    "Django",
    "Python",
    "PostgresSQL",
    "DjangoRestFramework",
    "Channels"
  ];
  const deployment = ["Heroku", "Git", "Docker", "ButterCMS"];
  return (
    <Container>
      <Jumbotron className="text-white" style={{ backgroundColor: "#222222" }}>
        <Row>
          <Col>
            Want to leave a review for any completed contracts or want to visit
            my page on any of the freelancing sites I'm active on. Find me
            through these links
          </Col>
          <Col>
            <Button block variant="outline-success">
              Rate me on Upwork <FontAwesomeIcon icon={faMoneyBill} />{" "}
            </Button>
            <Button block variant="outline-warning">
              Rate me on Fiverr
              <img src={twitter} style={{ width: "1.4rem" }} />
            </Button>
            <Button block variant="outline-info">
              Rate me on Freelancer
              <img src={viber} style={{ width: "1.4rem" }} />
            </Button>
            <Button block variant="outline-primary">
              Rate me on LinkedIn
              <Badge>
                <img src={linkedin} style={{ width: "1.4rem" }} />
              </Badge>
            </Button>
          </Col>
        </Row>
      </Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img src={image2} />
          <Carousel.Caption>First thing</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} />
          <Carousel.Caption>Second thing</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} />
          <Carousel.Caption>Third thing</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} />
          <Carousel.Caption>Fourth thing</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardGroup className="text-white">
        <Card bg="success">
          <Card.Header>
            <h3>About me</h3>
          </Card.Header>
          <Card.Body>
            <Card.Text className="p-2">
              I am a freelance website developer from Nigeria with the skills to
              build innovative and progressive websites for you using the best
              cutting-edge technologies on the web today.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="success">
          <Card.Header>
            <h3>My Services</h3>
          </Card.Header>
          <Card.Body>
            <Card.Text className="p-2">
              I offer fast, reliable and speedy creation of websites using
              software used by corporations such as Google, Facebook, Amazon,
              Pinterest, Instagram, Whatsapp and thousands of others
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <br />
      <Card className="bg-white">
        <Card.Header className="text-center">
          <h2>Tools I use for development</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              Frontend Development: The frontend of any website is the section
              that users interact freely with. It is the area specializing in
              UI/UX design, useability, and general appeal of the website. To
              achieve this, I use the following tools as well as anyother you
              might desire:
              <br />
              <br />
              <Card>
                <Card.Header>Frontend Tools</Card.Header>
                <ListGroup>
                  {frontend.map((frontenditem) => (
                    <ListGroupItem>{frontenditem}</ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </Col>
            <Col>
              Backend Development:
              <br />
              <Card>
                <Card.Header>Backend Tools</Card.Header>
                <ListGroup>
                  {backend.map((backendi) => (
                    <ListGroupItem>{backendi}</ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </Col>
            <Col>
              Website Deployment and Database Migrations:
              <Card>
                <Card.Header>Deployment</Card.Header>
                <ListGroup>
                  {deployment.map((deploymenti) => (
                    <ListGroupItem>{deploymenti}</ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
