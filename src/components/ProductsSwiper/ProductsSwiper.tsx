import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './ProductsSwiper.module.css'

// import required modules
import { Pagination } from 'swiper/modules'

import image1 from '@assets/images/w1.avif?url'
import image2 from '@assets/images/w2.avif?url'
import image3 from '@assets/images/w3.avif?url'

export default function ProductsSwiper({ solt1, solt2, slot3 }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={image1} alt='ALTK' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt='ALTK' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt='ALTK' />
        </SwiperSlide>
        <SwiperSlide>{solt1}</SwiperSlide>
        <SwiperSlide>{solt2}</SwiperSlide>
        <SwiperSlide>{slot3}</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}
