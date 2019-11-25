import React from "react";
import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProgressiveImage from "react-progressive-image";
import image1Smalll from "../assets/images/image1Small.jpg";
import image1 from "../assets/images/image1.jpg";
import image2Smalll from "../assets/images/image2Small.jpg";
import image2 from "../assets/images/image2.jpg";
import image3Smalll from "../assets/images/image3Small.jpg";
import image3 from "../assets/images/image3.jpg";
import image4Smalll from "../assets/images/image4Small.jpg";
import image4 from "../assets/images/image4.jpg";
import Fade from "react-reveal/Fade";

export default function Home() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1190px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1190px)"
  });

  return (
    <div className="home view">
      {isMobile && (
        <>
          <Fade>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image1}
                  placeholder={image1Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image1"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
          </Fade>
          <Fade>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image2}
                  placeholder={image2Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image2"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
          </Fade>
          <Fade>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image3}
                  placeholder={image3Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image3"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
          </Fade>
          <Fade>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image4}
                  placeholder={image4Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image4"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
          </Fade>
        </>
      )}
      {isDesktop && (
        <>
          <div className="imageContainerDesktop">
            <div className="homeLeftImage">
              <Fade left>
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image1}
                  placeholder={image1Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image1"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Fade>
            </div>
            <div className="homeRightDesc">
              <Fade right>
                <div className="homeText">
                  <h1>Lorem ipsum</h1>
                  <h3>dolor sit amet, consectetur adipiscing elit</h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="imageContainerDesktop">
            <div className="homeLeftDesc">
              <Fade left>
                <div className="homeText">
                  <h1>Lorem ipsum</h1>
                  <h3>dolor sit amet, consectetur adipiscing elit</h3>
                </div>
              </Fade>
            </div>
            <div className="homeRightImage">
              <Fade right>
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image2}
                  placeholder={image2Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image1"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Fade>
            </div>
          </div>
          <div className="imageContainerDesktop">
            <div className="homeLeftImage">
              <Fade left>
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image3}
                  placeholder={image3Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image1"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Fade>
            </div>
            <div className="homeRightDesc">
              <Fade right>
                <div className="homeText">
                  <h1>Lorem ipsum</h1>
                  <h3>dolor sit amet, consectetur adipiscing elit</h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="imageContainerDesktop">
            <div className="homeLeftDesc">
              <Fade left>
                <div className="homeText">
                  <h1>Lorem ipsum</h1>
                  <h3>dolor sit amet, consectetur adipiscing elit</h3>
                </div>
              </Fade>
            </div>
            <div className="homeRightImage">
              <Fade right>
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image4}
                  placeholder={image4Smalll}
                  delay={1000}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        className="image imageMobile"
                        src={src}
                        alt="image1"
                      />
                    </div>
                  )}
                </ProgressiveImage>
              </Fade>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
