import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface OpenModalExitProviderProps {
  children: ReactNode
}

interface OpenModalExitContextProps {
  isModalOpen: true | false
  setIsModalOpen: (value: boolean) => void
}

const OpenModalExitContext = createContext({} as OpenModalExitContextProps)

export function OpenModalExitProvider({ children }: OpenModalExitProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <OpenModalExitContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </OpenModalExitContext.Provider>
  )
}

export function useModalExit() {
  const { isModalOpen, setIsModalOpen } = useContext(OpenModalExitContext)
  return { isModalOpen, setIsModalOpen }
}