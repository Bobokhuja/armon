import classes from './ModalRequest.module.scss'
import Modal from '../Modal'
import CloseButton from '../../UI/CloseButton/CloseButton'
import Input from '../../UI/form/Input/Input'
import { ChangeEventHandler, useContext, useState } from 'react'
import { ModalRequestContext } from './context/ModalRequestContext'

function ModalRequest() {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const requestModal = useContext(ModalRequestContext)

  const onChangeName: ChangeEventHandler<HTMLInputElement> = event => setName(event.target.value)
  const onChangePhone: ChangeEventHandler<HTMLInputElement> = event => setPhone(event.target.value)

  return (
    <Modal closeModal={requestModal.onModalHide}>
      <div className={classes.Request}>
        <CloseButton
          className={classes.Close}
          onClick={requestModal.onModalHide}
        />
        <p className={classes.Title}>Оставить заявку</p>
        <p className={classes.Description}>Оставьте свои контакты и наш менеджер свяжется с Вами</p>

        <form action="">
          <Input
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="Имя"
            required={true}
          />
          <Input
            type="tel"
            value={phone}
            onChange={onChangePhone}
            placeholder="Телефон"
            required={true}
          />
          <button
            className={classes.Submit}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default ModalRequest