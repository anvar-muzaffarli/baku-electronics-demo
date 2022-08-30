import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Demo = () => {
  return (
    <>

<Swiper
       
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/104845/xiaomi-redmi-note-11-pro-128gb-5g-gray-1_260x220_172.jpg"
alt=""/></SwiperSlide>
      </Swiper>
    
    
    </>
  )
}

export default Demo