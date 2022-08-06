import classes from './Home.module.scss'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.Wrap}>
        <Banner />
      </div>
    </div>
  )
}

export default Home