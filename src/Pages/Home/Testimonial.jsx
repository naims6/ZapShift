import React, { useEffect, useState } from "react";
import customerTop from "../../assets/testimonial/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonial.css";
// img import
import reviewQuote from "../../assets/testimonial/reviewQuote.png";
import axios from "axios";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    axios.get("public/data/reviews.json").then((data) => {
      setReviewData(data.data);
    });
  }, []);

  return (
    <div className="mt-16">
      <div className="container2">
        <div className="flex flex-col items-center">
          <img src={customerTop} alt="tesimonial" />
          <h2 className="text-center text-2xl lg:text-3xl font-bold mt-10 mb-4">
            What Our Customer's are saying
          </h2>
          <p className="text-text-secondary mb-8 max-w-[550px] text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      {/* testimonial */}
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 40,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper bannerTestimonial mt-12"
        >
          {reviewData.map((r) => (
            <SwiperSlide className="testimonial-slide">
              <div className="slide-content overflow-hidden bg-surface w-[300px] h-[300px] rounded-2xl p-8">
                <div className="border-b-2 border-dotted border-border pb-5">
                  <figure>
                    <img
                      className="w-12"
                      src={reviewQuote}
                      alt="review quote"
                    />
                  </figure>
                  <p>{r.review}</p>
                </div>
                {/* review people */}
                <div className="flex gap-5 mt-3">
                  <img
                    className="size-10 rounded-full"
                    src={r.user_photoURL}
                    alt={r.userName}
                  />
                  <div className="">
                    <h2>{r.userName}</h2>
                    <h3>Senior Product Designer</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
