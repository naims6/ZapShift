import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// banner image
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const bannerImages = [banner1, banner2, banner3];

const Banner = () => {
  return (
    <div className="mx-4">
      <div className="bg-surfac bg-amber-200  h-[600px] mt-9 rounded-2xl overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[600px]"
        >
          {bannerImages.map((img) => (
            <SwiperSlide className="h-[600px] ">
              {/* <div className="h-full w-full"> */}
              <img className="h-[600px]" src={img} alt="banner image" />
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
