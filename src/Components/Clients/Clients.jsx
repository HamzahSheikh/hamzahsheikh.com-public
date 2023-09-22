import React, { memo, useRef } from "react";

// Libraries
import { Col, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { PropTypes } from "prop-types";

// Data
import { ClientData02 } from "./ClientsData";

const ClientSwitch = (params, item, i) => {
  switch (params.theme) {
    case "client-logo-style-06":
      return (
        <Col key={i} className={params.className}>
            <m.div {...{ ...params.animation, transition: { delay: i / 4, duration: 0.8 } }}>
              {item.img && <img width="148" height="43" className="w-[auto]" src={item.img} alt="clientlogo" />}
            </m.div>
        </Col>
      )
    default:
      return (
        <Col key={i} className={params.className}>
          <m.div
            className="client-box relative w-full h-full inline-block" {...{ ...params.animation, transition: { delay: i / 4, duration: 0.8 } }}>
              <img className="relative w-[auto]" width="148" height="43" src={item.img} alt="clientlogo" />
          </m.div>
        </Col>
      )
  }
}

const ClientCarouselSwitch = (params, item, i) => {
  switch (params.theme) {
    case "client-logo-style-06":
      return (
        <SwiperSlide key={i}>
            {item.img && <img width="" height="" alt="clientlogo" src={item.img} />}
        </SwiperSlide>
      )
    default:
      return (
        <SwiperSlide key={i}>
          <div className="client-box">
              <img width="" height="" src={item.img} alt="clientlogo" />
          </div>
        </SwiperSlide>
      )
  }
}

const Clients = (props) => {
  const swiperRef = useRef(null);
  return (
    props.carousel === true ? (
      <m.div className={`client-slider-wrapper relative${props.className ? ` ${props.className}` : ""}`} {...props.animation}>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          className={props.theme}
          modules={[Navigation, Pagination, Autoplay]}
          {...props.carouselOption}
        >
          {
            props.data.map((item, i) => {
              return ClientCarouselSwitch(props, item, i)
            })
          }
        </Swiper>
        {
          props.carouselOption.navigation && (
            <>
              <div onClick={() => swiperRef.current.swiper.slidePrev()} className="swiper-button-prev absolute"></div>
              <div onClick={() => swiperRef.current.swiper.slideNext()} className="swiper-button-next absolute"></div>
            </>
          )
        }
      </m.div>
    ) : (
      <Row className={`${props.grid} ${props.theme}`}>
        {props.data.map((item, i) => ClientSwitch(props, item, i))}
      </Row>
    )
  );
}

Clients.defaultProps = {
  data: ClientData02,
  animationDelay: 0.2,
  theme: "client-logo-style-01",
}

Clients.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      target: PropTypes.string,
      link: PropTypes.string
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  theme: PropTypes.string,
  grid: PropTypes.string,
  carousel: PropTypes.bool,
  carouselOption: PropTypes.object,
}

export default memo(Clients);