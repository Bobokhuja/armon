import classes from './MainProjectItem.module.scss'
import { IProject } from '../../../../models/IProject'
import Card from '../../../Card/Card'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

function MainProjectItem({project}: {project: IProject}) {
  return (
    <li className={classes.Item}>
      <Link to={project.url}>
      <Card
        img={project.img}
        classNames={{
          card: classes.Card,
          img: classes.Img
        }}
      >
        <p className={classes.Address}>{project.address}</p>
        <h2 className={classes.Title}>{project.title}</h2>
        <div className={classes.Description}>
          {parse(project.text.substring(0, 100))}...
        </div>
      </Card>
      </Link>
    </li>
  )
}

export default MainProjectItem