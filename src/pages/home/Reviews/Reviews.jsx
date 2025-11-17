import React, { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="my-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-secondary text-center font-bold">
          What our customers are sayings
        </h1>
        <p className="text-gray-600 my-3 text-center max-w-2xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((reviewCard) => (
          <SwiperSlide key={reviewCard.id} >
            <ReviewCard reviewCard={reviewCard}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
