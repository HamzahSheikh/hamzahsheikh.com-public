import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion';
import { Link as ScrollTo } from "react-scroll"
import Typical from 'react-typical';
import RotateBox from '../../Components/RotateBox/RotateBox';

// Components
import Header from '../../Components/Header/Header'
import SocialIcons from "../../Components/SocialIcon/SocialIcons"
import Overlap from "../../Components/Overlap/Overlap"
import Buttons from '../../Components/Button/Buttons'
import Clients from '../../Components/Clients/Clients'
import SideButtons from "../../Components/SideButtons";
import { fadeIn, zoomIn, fadeInRight, fadeInLeft } from "../../Functions/GlobalAnimations";
import { TiltBox } from '../../Components/FancyText/FancyText'


const RotateBoxData = [
  {
    img: "/assets/img/ubisoft.png",
    title: "Software Engineering Intern:",
    title2: "Online Services ",
    subtitle: "Ubisoft",
    icon: "/assets/img/ubisoft.png",
    btnLink: "#",
    btnTitle: "Discover more",
    content: "Collaborated with a large software development team to design, develop, test, and ensure the quality of AWS-based microservices impacting millions of global users."
  },
  {
    img: "/assets/img/ericsson.png",
    title: "Software Engineering Intern:",
    title2: "Engineering Tools",
    subtitle: "Ericsson",
    icon: "line-icon-Crown",
    btnLink: "#",
    btnTitle: "Discover more",
    content: "Collaborated with diverse departments and stakeholders to streamline and automate complex processes, significantly enhancing productivity."
  },
  {
    img: "/assets/img/ericsson.png",
    title: "Software Engineering Intern:",
    title2: "Business Intelligence",
    subtitle: "Ericsson",
    icon: "line-icon-Daylight",
    btnLink: "#",
    btnTitle: "Discover more",
    content: "Designed, developed, and maintained the systems and tools used to gather, analyze, and present big data within Ericsson using Java, Python, JavaScript, and Tableau."
  }
]

const socialIconsData = [
  {
    color: "#fff",
    link: "https://github.com/HamzahSheikh",
    icon: "fab fa-github"
  },
  {
    color: "#fff",
    link: "https://www.linkedin.com/in/hamzah-sheikh/",
    icon: "fab fa-linkedin-in"
  },
]

const expertiseData = [
  {
    img: "/assets/img/Expertise/java.png"
  },
  {
    img: "/assets/img/Expertise/python.png"
  },
  {
    img: "/assets/img/Expertise/typescript.png"
  },
  {
    img: "/assets/img/Expertise/react.png"
  },
  {
    img: "/assets/img/Expertise/c-sharp.png"
  },
  {
    img: "/assets/img/Expertise/js.png"
  },
  {
    img: "/assets/img/Expertise/git.png"
  },
  {
    img: "/assets/img/Expertise/nodejs.png"
  },
  {
    img: "/assets/img/Expertise/spring-boot.png"
  }
]

const HomePage = () => {

  const [removeImage, setRemoveImage] = React.useState(window.outerHeight < 376);
  const [removeIcon, setRemoveIcon] = React.useState(window.innerHeight < 600);

  window.onresize = window.onload = function () {
    setRemoveImage(this.outerHeight < 376);
    setRemoveIcon(this.innerHeight < 1000);
    console.log(removeIcon, removeImage);
  }

  return (
    <div className="freelancer-page" style={{ backgroundColor: "black" }}>
      <SideButtons />
      {/* Header Start */}
      <Header topSpace={{ md: true, zIndex: "9" }} className="left-menu-modern-sidebar fixed top-0 left-0 z-10 md:w-full md:h-auto">
        <div className="bg-transparent sidebar-nav-action h-[100vh] md:h-auto w-[65px] md:w-full py-[30px] flex flex-col md:flex-row md:justify-between md:px-[30px] md:py-[15px] sm:px-[15px]">
          <Col className="flex justify-center md:justify-start">
            <Link aria-label="header logo" to="/">
              <img width={30} height={35} className="max-h-[36px]" alt="" src={"/assets/img/main.png"} />
            </Link>
          </Col>
          <Col className="flex items-center justify-center xs:justify-end">
          </Col>
          <Col className="flex flex-col justify-end md:flex-row">
            <SocialIcons size="xs" theme="social-icon-style-01" className="flex-col md:flex-row justify-center" iconColor="light" data={socialIconsData} />
          </Col>
        </div>
      </Header>
      {/* Header End */}

      {/* Section start */}
      <section className="bg-cover relative p-0 overflow-visible bg-center" style={{ height: "90vh" }}>
        <Container className="align-items-center relative" style={{ justifyContent: "center", display: "flex", marginTop: "10vh" }}>
          <Row className='justify-content-md-center'>
            {removeImage === false &&
              <Col xs={12} md={8} className='align-self-md-center align-self-end' style={{ aspectRatio: '683/539', zIndex: '10', marginBottom: "10vh" }}>
                <m.div  {...fadeIn}>
                  <img src={"/assets/img/main.png"} alt='' style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0px' }} />
                </m.div>
              </Col>
            }
            <Col xs={21} md={4} className='align-self-md-center align-self-start' style={{ fontWeight: 'bold', color: "white", zIndex: "1" }}>
              <h2>Hi 👋<br />I'm Hamzah,
                <h2 className="heading-4 mb-0 text-white">
                  <Typical
                    steps={['Software\nEngineer.', 2000, 'New Grad. 🎓', 1000, 'Innovative. 💡', 1000, 'Team Player. ⚡', 1000, 'Detail Oriented. 🔍', 1500, 'Creative. ✨', 1000, 'Software\nEngineer.', 3000]}
                    loop={Infinity}
                    wrapper="h4"
                  />
                </h2>
              </h2>
            </Col>
          </Row>
        </Container>
        {(removeIcon === false || removeImage) &&
          <Container className="align-self-md-center align-self-start" style={{ justifyContent: "center", display: "flex" }}>
            <ScrollTo to="down-section" offset={0} delay={0} spy={true} smooth={true} duration={800}>
              <i className="ti-mouse text-[28px] text-white up-down-ani"></i>
            </ScrollTo>
          </Container>
        }
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="big-section py-[170px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden bg-no-repeat bg-[top_110px_left]">
        <Container>
          <Row className="items-center justify-center z-0 relative font-sans align-self-center">
            <m.div className="col-12 col-lg-4 col-md-7 text-left font-sans md:text-center md:mb-[30px] sm:mb-0 xs:mt-[30px]"  {...fadeIn}>
              <span className="font-bold font-serif text-white text-lg uppercase block mb-[20px] md:text-xmd" style={{ fontSize: "30px" }}>About Me</span>
              <p style={{ paddingBottom: "60px", color: "white", fontSize: "20px" }} className="text-lg leading-[38px] md:text-xmd md:leading-[22px]">
                My name is Hamzah Sheikh. I am a passionate software engineer with a keen interest in software design and architecture. <br /><br />I bring to the table a blend of talent, creativity, and determination, all of which I'm eager to apply to solve complex challenges.
              </p>
            </m.div>
            <Col xs={12} md={8} className='align-self-center' style={{ aspectRatio: '683/539', zIndex: '2' }}>
              <TiltBox>
                <m.div {...fadeInLeft}>
                  <img height="" width="" src={"/assets/img/me.png"} alt="" />
                </m.div>
              </TiltBox>
            </Col>
          </Row>
          <m.div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 mt-28 sm:mt-0 font-serif flex md:justify-center xs:block" {...fadeIn}>
            <m.div className="col font-medium sm:mb-[30px] text-center" {...{ ...fadeIn, transition: { delay: 0.1 } }}>
              <span className="tracking-[1px] block uppercase text-center">Expertise</span>
              <span className="text-white block text-center">Software Development</span>
            </m.div>
            <m.div className="col sm:mb-[30px] text-center font-medium" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              <span className="tracking-[1px] block uppercase text-center">Resides in</span>
              <span className="text-white block text-center">Montreal, QC</span>
            </m.div>
            <m.div className="col xs:mb-[30px] font-medium text-center" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
              <span className="tracking-[1px] block uppercase text-center">Graduation</span>
              <span className="text-white block text-center">June 2023</span>
            </m.div>
            <m.div className="col font-medium text-center" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <span className="tracking-[1px] block uppercase text-center">Education</span>
              <span className="text-white block text-center">Bachelors, Software Engineering</span>
            </m.div>
          </m.div>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section id="specialization" className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" style={{ backgroundImage: `url('/assets/img/lowpoly.jpg')`, backgroundRepeat: "no-repeat" }}>
        <Container>
          <Row className="justify-center">
            <Col md={6} className="text-center mb-[4.5rem] md:mb-12">
              <h2 className="heading-5 font-serif font-light mb-[20px] text-white -tracking-[1px] md:mb-0">Professional</h2>
              <span style={{ color: 'white' }} className="font-serif font-semibold inline-block text-[5rem] leading-[11rem] lg:-tracking-[1.5px] sm:text-[7rem] xs:text-[3rem]">Experience</span>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginBottom: "100px" }} >
          <RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" animation={fadeIn} animationDelay={0.2} data={RotateBoxData} />
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pb-[130px] bg-[#131313] lg:pb-[90px] md:pb-[75px] sm:py-[50px]" style={{ backgroundImage: `url('/assets/img/webp/home-branding-agency-bg-img-03.webp')` }}>
        <Container>
          <Row>
            <Overlap className="mb-[90px] sm:mb-[50px] xs:mb-12">
              <Col className="text-center relative" >
                <m.div  {...{ ...zoomIn, transition: { ease: "circOut", duration: 1, delay: 0.2 } }}>
                  <span className="font-serif font-semibold inline-block text-[9rem] leading-[11rem] text-white  lg:-tracking-[1.5px] sm:text-[8rem] xs:text-[5rem]">Expertise</span>
                </m.div>
              </Col>
            </Overlap>
          </Row>
          <Row animation={fadeIn}>
            <Clients grid="row-cols-3 row-cols-md-6 row-cols-lg-7 justify-center" theme="client-logo-style" data={expertiseData} />
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[50px] bg-center bg-contain bg-no-repeat bg-black lg:py-[20px] md:py-[60px] sm:py-[60px] xs:py-[20px]" style={{ backgroundImage: `url('/assets/img/webp/home-branding-agency-bg-img-01.webp')` }}>
        <Container>
          <Row className="justify-center items-center flex">
            <m.div className="col-md-12 text-center" {...{ ...fadeIn, transition: { duration: 0.5, delay: 0.4 } }}>
              <h2 className="heading-5 font-serif font-light mb-[20px] text-white -tracking-[1px] md:mb-0">Highlighted</h2>
              <h1 className="text-white font-serif -tracking-[5px] text-center leading-[170px] text-[130px] font-semibold lg:text-[110px] lg:leading-[140px] md:text-[90px] md:leading-[110px] sm:text-[50px] sm:leading-[65px] sm:-tracking-[3px]">Projects</h1>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[0px]">
        <Container>
          <Row className="items-center">
            <m.div {...fadeInRight} className="col-12 col-xl-6 col-md-5 sm:mb-[30px]">
              <TiltBox>
                <img height="" width="" src={"/assets/img/datum.png"} alt="" />
              </TiltBox>
            </m.div>
            <Col xl={5} lg={{ span: 6, offset: 1 }} md={7}>
              <h5 className="text-white font-serif">datum.io</h5>
              <p className="mb-[4.5rem] text-white" style={{ fontSize: "20px" }}>
                Designed as a Capstone project, this application integrates <b>gamification</b> to enhance data collection for focused research studies. Its <b>versatility</b> allows it to be applied effectively in various research domains, including mental health studies and product engagement analyses. <br /><br /> With a <b>user-centric</b> approach, it emphasizes <b>usability</b> and <b>engagement</b>, delivering an intuitive and enjoyable user experience.
              </p>
              <Row className="row-cols-5">

                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/java.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/spring-boot.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/react.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/js.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/nodejs.png"} alt="" />
                </m.div>
              </Row>
              <Buttons type="submit" ariaLabel="Our services" className="btn-fill btn-fancy rounded font-medium font-serif uppercase hover:text-black mt-[50px]" themeColor="" href="https://datum-io.app/" size="md" color="#fff" title="Live Preview" target="_blank"/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[0px]" style={{ marginTop: "50px" }}>
        <Container>
          <Row className="items-center">
            <m.div {...fadeInRight} className="col-12 col-xl-6 col-md-5 sm:mb-[30px]">
              <TiltBox>
                <img height="" width="" src={"/assets/img/covidex.png"} alt="" />
              </TiltBox>
            </m.div>
            <Col xl={5} lg={{ span: 6, offset: 1 }} md={7}>
              <h5 className="text-white font-serif">Covidex</h5>
              <p className="mb-[4.5rem] text-white" style={{ fontSize: "20px" }}>
                Covidex is a comprehensive Covid-19 tracking application catering to a diverse user base, including patients, doctors, health officials, and immigration authorities. Its primary aim is to assist us in addressing the current pandemic situation and progressing towards a solution.<br /><br />  Patients can conveniently upload their health information on the platform, allowing doctors and health officials to monitor their well-being and track the virus's progression.
              </p>
              <Row className="row-cols-5">
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/java.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/spring-boot.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/js.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/nodejs.png"} alt="" />
                </m.div>
              </Row>
              <Buttons type="submit" ariaLabel="Our services" className="btn-fill btn-fancy rounded-none font-medium font-serif uppercase hover:text-black mt-[50px]" themeColor="" size="md" color="#fff" title="Preview and Source Code Coming Soon!" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[10px]" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Container>
          <Row className="items-center">
            <m.div {...fadeInRight} className="col-12 col-xl-6 col-md-5 sm:mb-[30px]">
              <TiltBox>
                <img height="" width="" src={"/assets/img/ai.png"} alt="" />
              </TiltBox>
            </m.div>
            <Col xl={5} lg={{ span: 6, offset: 1 }} md={7}>
              <h5 className="text-white font-serif">Sonic A.I.</h5>
              <p className="mb-[4.5rem] text-white" style={{ fontSize: "20px" }}>
                A Python-powered application, developed using OpenAI, used to learn and master playing classic Sonic games. The application uses a neural network to learn from the game's environment and make decisions based on screen captures, player position and player momentum. <br /><br />The application is capable of learning and adapting to the game's environment, allowing it to complete the level as fast as possible.
              </p>
              <Row className="row-cols-5">
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/python.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">
                  <img height="" width="" src={"/assets/img/Expertise/openai.png"} alt="" />
                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">

                </m.div>
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px]">

                </m.div>
              </Row>
              <Buttons type="submit" ariaLabel="Our services" className="btn-fill btn-fancy rounded-none font-medium font-serif uppercase hover:text-black mt-[50px]" themeColor="" size="md" color="#fff" title="Preview and Source Code Coming Soon!" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-no-repeat" {...fadeIn}>
        <Container>
          <Row className="justify-center relative">
            <m.div className="flex flex-col md:mb-[50px] col-lg-5 col-md-8" {...fadeIn}>
              <h1 className="font-serif font-semibold text-white -tracking-[2px] flex flex-col md:mb-20">
                <span className="text-border text-border-color-white text-border-width-2px">Interested?</span></h1>
              <h2 className="heading-5 font-serif font-semibold text-white mb-20 -tracking-[1px]">Let's get in touch!</h2>
            </m.div>
            <m.div className="col-lg-6 col-md-8 offset-lg-1 overflow-hidden" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
              <h2 className="heading-5 font-serif font-semibold text-white mb-20 -tracking-[1px]">
                <p className="font-sans mb-[25px]">
                  <a aria-label="gamil" href="mailto:hamzahsheikh@hotmail.com" className="hover:text-white"> hamzahsheikh@hotmail.com</a></p><SocialIcons size="lg" theme="social-icon-style-01" className="flex-row" iconColor="light" data={socialIconsData} /></h2>
            </m.div>
          </Row>
        </Container>
      </m.section >
      {/* Section End */}

    </div >
  )
}


export default HomePage