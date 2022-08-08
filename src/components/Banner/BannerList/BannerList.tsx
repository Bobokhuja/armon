import classes from './BannerList.module.scss'
import { IBanner } from '../../../models/IBanner'
import BannerItem from './BannerItem/BannerItem'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper'

function BannerList({bannerList}: { bannerList: IBanner[] }) {
  return (
    <div className={classes.List}>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        effect="flip"
        modules={[Autoplay]}
        autoplay={{
          delay: 1000
        }}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          767: {
            spaceBetween: 40,
            // slidesPerView: 2
          },
          471: {
            spaceBetween: 10
          }
        }}
        className={classes.Slider}
        // slideClass={classes.Slide}
      >

        {bannerList.map(banner =>
          <SwiperSlide key={banner.title} className={classes.Slide}>
            <BannerItem banner={banner}/>
          </SwiperSlide>
        )}

      </Swiper>
    </div>
  )
}

export default BannerList