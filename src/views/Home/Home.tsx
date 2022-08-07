import classes from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import MainSlider from '../../components/MainSlider/MainSlider'

function Home() {
  return (
    <div className={classes.Home}>
      <MainSlider />
      <div className={classes.Wrap}>
        <Banner />
      </div>
    </div>
  )
}

export default Home