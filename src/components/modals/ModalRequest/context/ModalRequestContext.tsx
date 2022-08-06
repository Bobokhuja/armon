import { createContext } from 'react'
import { IModal } from '../../../../models/IModal'

export const ModalRequestContext = createContext<IModal>({
  onModalHide: () => {},
  onModalShow: () => {},
  isShow: false
})