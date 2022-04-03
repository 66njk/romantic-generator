import { Dispatch, SetStateAction, useState } from 'react'
import SvgSuccess from '../../public/svg/Icon/success.svg'
import SvgFail from '../../public/svg/Icon/fail.svg'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export enum ToastType {
  success,
  fail
}

type ToastProps = {
  type: ToastType
  state: [boolean, Dispatch<SetStateAction<boolean>>]
  content: string
  title?: string
}

const getDefaultTitle = (type: ToastType) => {
  switch (type) {
    case ToastType.success :
      return '成功✨'
    case ToastType.fail :
      return '失败🌚'
  }
}

const Toast: React.FC<ToastProps> = ({ type, state, content, title = getDefaultTitle(type) }) => {

  const [isShowCopyToClipboard, setIsShowCopyToClipboard] = state

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          in={isShowCopyToClipboard}
          timeout={300}
          onEnter={() => setIsShowCopyToClipboard(false)}
          onExited={() => setIsShowCopyToClipboard(true)}
          classNames='toast'
        >
          <div className='fixed bottom-10 md:bottom-14 lg:bottom-20 left-1/2 -translate-x-2/4 flex w-80 p-4 bg-gray-800 rounded-xl'>
            {type === ToastType.success ?
              <SvgSuccess className='w-12 h-12 mr-2 fill-current text-emerald-500' /> :
              type === ToastType.fail ?
              <SvgFail className='w-12 h-12 mr-2 fill-current text-red-500' /> : ''
            }
            <div>
              <div className='mb-1 text-white text-xl font-semibold'>{title}</div>
              <div className='w-56 text-white text-opacity-60'>{content}</div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <style jsx>{`
        .toast-enter {
          bottom: -2.5rem;
          opacity: 0;
        }
        .toast-enter-active {
          bottom: 2.5rem;
          opacity: 1;
          transition: all 200ms;
        }
        .toast-exit {
          bottom: 2.5rem;
          opacity: 0;
        }
        .toast-exit-active {
          bottom: 5rem;
          opacity: 0;
          transition: all 200ms;
        }
      `}</style>
    </>
  )
}

export default Toast