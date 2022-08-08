import classes from './MainNewsList.module.scss'
import { INews } from '../../../models/INews'
import MainNewsItem from './MainNewsItem/MainNewsItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function MainNewsList({newsList}: { newsList: INews[] }) {
  return (
    <div className={classes.List}>
      <Swiper
        spaceBetween={40}
        slidesPerView="auto"
        className={classes.Slider}
        breakpoints={{
          991: {
            spaceBetween: 30,
            slidesPerView: 3
          },
          771: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 'auto'
          }
        }}
      >
        {newsList.map(news =>
          <SwiperSlide
            className={classes.Slide}
            key={news.id}
          >
            <MainNewsItem news={news}/>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default MainNewsList