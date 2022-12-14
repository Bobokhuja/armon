import classes from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import MainSlider from '../../components/MainSlider/MainSlider'
import MainProjects from '../../components/MainProjects/MainProjects'
import MainNews from '../../components/MainNews/MainNews'
import MainVideo from '../../components/MainVideo/MainVideo'

function Home() {
  return (
    <div className={classes.Home}>
      <MainSlider />
      <div className={classes.Wrap}>
        <Banner />
        <MainProjects />
        <MainNews />
        <MainVideo />
      </div>
    </div>
  )
}

export default Home