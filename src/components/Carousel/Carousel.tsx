import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import carouselImg1 from "../../assets/carousel/carousel_1.webp";
import carouselImg2 from "../../assets/carousel/carousel_2.webp";
import carouselImg3 from "../../assets/carousel/carousel_3.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

const Carousel = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
      className="swipperContainer"
    >
      <SwiperSlide>
        <img
          src={carouselImg1.src}
          decoding="async"
          loading="lazy"
          alt="Slide 1 - Book Nook"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={carouselImg2.src}
          decoding="async"
          loading="lazy"
          alt="Slide 2 - Goat La dicke"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={carouselImg3.src}
          decoding="async"
          loading="lazy"
          alt="Slide 3 - Lokal"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
