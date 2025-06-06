import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What We Offer?</h2>
                        <p>We offer web design, social media, branding, and marketing to drive growth.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Social Media Marketing</h5>
                            </div>
                            <div className="item">
                            <img src={meter2} alt="image"/>
                                <h5>Event Handling</h5>
                            </div>
                            <div className="item">
                            <img src={meter3} alt="image"/>
                                <h5>Brand Promotion</h5>
                            </div>
                            <div className="item">
                            <img src={meter4} alt="image"/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                            <img src={meter5} alt="image"/>
                                <h5>Ads and campaigns</h5>
                            </div>
                            <div className="item">
                            <img src={meter6} alt="image"/>
                                <h5>App Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
