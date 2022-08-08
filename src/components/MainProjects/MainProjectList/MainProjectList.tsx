import classes from './MainProjectList.module.scss'
import { IProject } from '../../../models/IProject'
import MainProjectItem from './MainProjectItem/MainProjectItem'

function MainProjectList({projectList}: { projectList: IProject[] }) {
  return (
    <ul className={classes.List}>
      {projectList.map(project =>
        <MainProjectItem key={project.id} project={project}/>
      )}
    </ul>
  )
}

export default MainProjectList