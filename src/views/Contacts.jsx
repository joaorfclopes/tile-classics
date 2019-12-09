import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
import ReactDelayRender from "react-delay-render";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import instagram from "../assets/svg/instagram-logo.svg";
import facebook from "../assets/svg/facebook-logo.svg";
import github from "../assets/svg/github-logo.svg";
import linkedin from "../assets/svg/linkedin-logo.svg";

function activeContacts() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").removeClass("active");
  $("#contactsButton").addClass("active");
}

$(window).scroll(function() {
  try {
    const distanceHome = $(".home").offset().top;
    const distancecontacts = $(".contacts").offset().top;
    const distanceContacts = $(".contacts").offset().top;
    if (
      $(window).scrollTop() >= distanceHome - 300 &&
      $(window).scrollTop() >= distancecontacts - 300 &&
      $(window).scrollTop() >= distanceContacts - 300
    ) {
      activeContacts();
    }
  } catch (error) {}
});

function Contacts() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  return (
    <div className="contacts view">
      {isMobile && (
        <>
          <div className="contactsMobile">
            <div className="wave-container">
              <h1 className="aboutTitleMobile">Contact Us</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#111"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="contactsContainerMobile"></div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <Slide bottom>
            <div className="contactsDesktop">
              <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#111"
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <div className="contactsContainerDesktop">
                  <h1 className="aboutTitleDesktop">Contact Us</h1>
                  <div className="contactsContent contactsContentDesktop">
                    <div className="contactsLeft contactsLeftDesktop">
                      <Fade delay={200}>
                        <div className="contactsLeftMap contactsLeftMapDesktop">
                          <iframe
                            title="map"
                            className="mapDesktop"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48291.28660239374!2d-8.68467773392349!3d40.845413705177805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23858e8509d46f%3A0xbe5329c1c64c57f6!2sOvar!5e0!3m2!1sen!2spt!4v1575923263870!5m2!1sen!2spt"
                            frameBorder="0"
                          ></iframe>
                        </div>
                      </Fade>
                      <Fade delay={400}>
                        <div className="contactsLeftTextDesktop">
                          <h1 className="contactsLeftTitleDesktop">
                            Lorem ipsum
                          </h1>
                          <p className="contactsLeftParagraphDesktop">
                            dolor sit amet, consectetur adipiscing elit
                          </p>
                          <p className="contactsLeftParagraphDesktop">
                            12345653645
                          </p>
                          <p className="contactsLeftParagraphDesktop">
                            Mauris imperdiet ex id faucibus
                          </p>
                        </div>
                      </Fade>
                    </div>
                    <div className="contactsRight contactsRightDesktop"></div>
                  </div>
                  <div className="contactsFooter contactsFooterDesktop">
                    <div className="contactsBottom contactsBottomDesktop">
                      <a
                        href="https://www.instagram.com/eutanasiamata/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="contactsLink"
                          src={instagram}
                          alt="instagram logo"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100006059823061"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="contactsLink"
                          src={facebook}
                          alt="facebook logo"
                        />
                      </a>
                      <a
                        href="https://github.com/joaorfclopes"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="contactsLink"
                          src={github}
                          alt="github logo"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/joaorfclopes/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="contactsLink"
                          src={linkedin}
                          alt="linkedin logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </>
      )}
    </div>
  );
}

export default ReactDelayRender({ delay: 1500 })(Contacts);
