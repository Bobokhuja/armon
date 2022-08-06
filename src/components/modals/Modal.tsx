import classes from './Modal.module.scss'
import Backdrop from '../UI/Backdrop/Backdrop'
import { ReactNode } from 'react'

interface IModal {
  children: ReactNode
  closeModal: () => void
}

function Modal({children, closeModal}: IModal) {
  return (
    <div className={classes.Modal}>
      <Backdrop onClick={closeModal}/>
      <div className={classes.ModalWrapper}>
        {children}
      </div>
    </div>
  )
}

export default Modal