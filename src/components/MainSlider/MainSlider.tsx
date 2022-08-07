import classes from './MainSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import { ISlider } from '../../models/ISlider'
import MainSliderItem from './MainSliderItem/MainSliderItem'
import useRequest from '../../hooks/useRequest'

function MainSlider() {
  const [sliders] = useRequest('/get_slider?page=1')

  return (
    <section className={classes.MainSlider}>
      <h2 className={classes.Title}>Слайдер</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className={classes.Slider}
      >

        {sliders.map((slide: any) =>
          <SwiperSlide key={slide.id} className={classes.Slide}>
            <MainSliderItem slide={slide} />
          </SwiperSlide>
        )}

      </Swiper>
    </section>
  )
}

export default MainSlider