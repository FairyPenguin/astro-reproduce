import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Swiper.module.css'

import image1 from '@assets/images/s1.jpg?url'
import image2 from '@assets/images/s2.jpg?url'
import image3 from '@assets/images/s3.jpg?url'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

export default function Swiper2() {
  return (
    <>
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> */}
        <SwiperSlide>
          <a href='#'>
            <img src={image1} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <img src={image2} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <img src={image3} />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
