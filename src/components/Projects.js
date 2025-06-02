import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/photo1.png";
import projImg2 from "../assets/img/photo2.png";
import projImg3 from "../assets/img/photo3.png";
import projImg4 from "../assets/img/photo4.png";
import projImg5 from "../assets/img/photo5.png";
import projImg6 from "../assets/img/photo6.png";
import projImg7 from "../assets/img/photo7.png";
import projImg8 from "../assets/img/photo8.png";
import projImg9 from "../assets/img/photo9.png";
import projImg10 from "../assets/img/photo10.png";
import projImg11 from "../assets/img/photo11.png";
import projImg12 from "../assets/img/photo12.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "THE F-SPOT",
      description: "Managed Instagram, Designed Exceptional Reels and Posts.",
      imgUrl: projImg1,
    },
    {
      title: "PANCHTARA FOOD",
      description: "Crafted Visually Striking Social Media Posts for Reels.",
      imgUrl: projImg2,
    },
    {
      title: "EGGZONE HIMANSHU",
      description: "Created mouthwatering social media posts featuring visually appealing egg-based dishes for Reels.",
      imgUrl: projImg3,
    },
    {
      title: "CAKE TOWN BY HARNEET",
      description: "Designed visually delightful social media posts showcasing homemade bakery cakes for Reels.",
      imgUrl: projImg4,
    },
    {
      title: "LA FAVOURITIE CAFE",
      description: "Created captivating social media posts highlighting delicious café treats and beverages for Reels.",
      imgUrl: projImg5,
    },
    {
      title: "SHOBITAM",
      description: "Designed elegant social media posts showcasing the beauty and craftsmanship of traditional sarees for Reels.",
      imgUrl: projImg6,
    },
  ];
  // project2 will continue
  const projects2 = [
    {
      title: "EDUPATHWAY",
      description: "A dynamic full-stack website for a blogging business.",
      imgUrl: projImg7,
    },
    {
      title: "EXPLORA",
      description: "Developed a full-stack website, incorporating robust security mechanisms.",
      imgUrl: projImg8,
    },
    {
      title: "DILDAR TRAVELER",
      description: "Developed a full-stack website travel Agency, With responsive design.",
      imgUrl: projImg9,
    },
  ];

    // project3 will continue
    const projects3 = [
      {
        title: "KIRANA BHAIYA",
        description: " Created various attractive posters for business purposes.",
        imgUrl: projImg10,
      },
      {
        title: "FREELANCER",
        description: " Designed posters for clients, paying close attention to even the smallest details.",
        imgUrl: projImg11,
      },
      {
        title: "CASE KHARIDHO",
        description: "Developed a Designs for a business called CaseKharido aimed at creating more engaging content.",
        imgUrl: projImg12,
      },
    ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work We Have Done</h2>
                <p>Elevating brands with digital solutions—websites, social media, and growth.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Instagram</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Designing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                    {/* second */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                  {/* third */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
