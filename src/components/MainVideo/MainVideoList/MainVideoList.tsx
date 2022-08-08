import classes from './MainVideoList.module.scss'
import { IVideo } from '../../../models/IVideo'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainVideoItem from './MainVideoItem/MainVideoItem'
import { Navigation } from 'swiper'

function MainVideoList({videos}: {videos: IVideo[]}) {
  return (
    <div className={classes.List}>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${classes.Prev}`,
          nextEl: `.${classes.Next}`,
        }}
        breakpoints={{
          767: {
            spaceBetween: 30
          },
          471: {
            spaceBetween: 20
          },
          320: {
            spaceBetween: 16
          }
        }}
      >
        {videos.map(video =>
          <SwiperSlide>
            <MainVideoItem video={video} />
          </SwiperSlide>
        )}
      </Swiper>
      <div className={classes.Navigation}>
        <button className={classes.Prev} aria-label="Следуюущий слайд"></button>
        <button className={classes.Next} aria-label="Предыдущий слайд"></button>
      </div>
    </div>
  )
}

export default MainVideoList