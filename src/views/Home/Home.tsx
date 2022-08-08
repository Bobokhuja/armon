import classes from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import MainSlider from '../../components/MainSlider/MainSlider'
import MainProjects from '../../components/MainProjects/MainProjects'

function Home() {
  return (
    <div className={classes.Home}>
      <MainSlider />
      <div className={classes.Wrap}>
        <Banner />
        <MainProjects />
      </div>
    </div>
  )
}

export default Home