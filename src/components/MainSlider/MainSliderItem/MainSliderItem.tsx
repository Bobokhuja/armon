import classes from './MainSliderItem.module.scss'
import { ISlider } from '../../../models/ISlider'
import ButtonFlat from '../../UI/ButtonFlat/ButtonFlat'

function MainSliderItem({slide}: { slide: ISlider }) {
  return (
    <div className={classes.Item}>
      <picture>
        {
          (slide.imgMobile.endsWith('.jpg') ||
          slide.imgMobile.endsWith('.png')) && (
            <source media="(max-width: 767px)" srcSet={slide.imgMobile}/>
          )
        }
        <source media="(max-width: 768px)" src={classes.Img}/>
        <img className={classes.Img} src={slide.img} alt={slide.title}/>
      </picture>

      <div className={classes.Info}>
        {
          (slide.title || slide.text) && (
            <div className={classes.Content}>
              <p className={classes.Text}>{slide.text}</p>
              <p className={classes.Title}>{slide.title}</p>
            </div>
          )
        }
        <a
          className={classes.Button}
          href={slide.url}
        >
          <ButtonFlat>
            Посмотреть квартиры
          </ButtonFlat>
        </a>
      </div>
    </div>
  )
}

export default MainSliderItem