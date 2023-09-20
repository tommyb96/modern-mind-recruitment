import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/svg/Carousel/img_1.svg";
import slide_image_2 from "../../assets/svg/Carousel/img_2.svg";
import slide_image_3 from "../../assets/svg/Carousel/img_3.svg";
import slide_image_4 from "../../assets/svg/Carousel/img_4.svg";
import slide_image_5 from "../../assets/svg/Carousel/img_5.svg";
import slide_image_6 from "../../assets/svg/Carousel/img_6.svg";

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const SwiperSlideItem = styled(SwiperSlide)`
  width: 489px;
  height: 376px;
  position: relative;
  margin-bottom: 40px;

  img {
    width: 489px;
    height: 376px;
    border-radius: 2rem;
    object-fit: cover;
  }

  .slide-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    padding: 10px;
    text-align: center;
  }

  @media (max-width: 1000px) {
    width: 403px !important;
    height: 310px !important;

    img {
      width: 403px !important;
      height: 310px !important;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 50px;
  }

  @media (max-width: 700px) {
    width: 307px !important;
    height: 236px !important;

    img {
      width: 307px !important;
      height: 236px !important;
    }
  }

  @media (max-width: 480px) {
    width: 262px !important;
    height: 202px !important;

    img {
      width: 262px !important;
      height: 202px !important;
    }
  }
`;

const SliderControler = styled.div`
  position: relative;
  bottom: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  .swiper-button-next {
    left: 64% !important;
    top: 50%;
    color: darkgray;
    width: 50px;
    transform: translateX(-58%) !important;
  }

  .swiper-button-prev {
    left: 36% !important;
    top: 50%;
    color: darkgray;
    transform: translateX(-30%) !important;
  }

  @media (max-width: 900px) {
    bottom: 1rem;
  }

  @media (max-width: 700px) {
    .swiper-button-next {
      left: 68% !important;
    }

    .swiper-button-prev {
      left: 31% !important;
    }
  }

  @media (max-width: 480px) {
    .swiper-button-next {
      left: 73% !important;
    }

    .swiper-button-prev {
      left: 27% !important;
    }
  }
`;

const SwiperPagination = styled.div`
  position: relative;
  width: 15rem !important;
  bottom: 0rem;
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 200,
          modifier: 3,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlideItem>
          <img src={slide_image_1} alt="slide_image" />
          <div className="slide-label">IT</div>
        </SwiperSlideItem>
        <SwiperSlideItem>
          <img src={slide_image_2} alt="slide_image" />
          <div className="slide-label">Logistik</div>
        </SwiperSlideItem>
        <SwiperSlideItem>
          <img src={slide_image_3} alt="slide_image" />
          <div className="slide-label">Bau</div>
        </SwiperSlideItem>
        <SwiperSlideItem>
          <img src={slide_image_4} alt="slide_image" />
          <div className="slide-label">Gesundheitswesen</div>
        </SwiperSlideItem>
        <SwiperSlideItem>
          <img src={slide_image_5} alt="slide_image" />
          <div className="slide-label">Gastronomie</div>
        </SwiperSlideItem>
        <SwiperSlideItem>
          <img src={slide_image_6} alt="slide_image" />
          <div className="slide-label">Industrie</div>
        </SwiperSlideItem>

        <SliderControler>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <SwiperPagination className="swiper-pagination"></SwiperPagination>
        </SliderControler>
      </Swiper>
    </Container>
  );
};

export default Carousel;
