import { createContext, ReactNode, useContext, useState } from "react";

interface OpenNavBarContext {
  isOpenNavBar: true | false
  setIsOpenNavBar: (value: boolean) => void
}

interface OpenNavBarProviderProps {
  children: ReactNode
}

export const OpenNavBarContext = createContext({} as OpenNavBarContext)

export function OpenNavBarProvider({ children }: OpenNavBarProviderProps) {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false)

  return (
    <OpenNavBarContext.Provider value={{ isOpenNavBar, setIsOpenNavBar }}>
      {children}
    </OpenNavBarContext.Provider>
  )
}

export function useOpenNavBar() {
  const context = useContext(OpenNavBarContext)
  const { isOpenNavBar, setIsOpenNavBar } = context
  return { isOpenNavBar, setIsOpenNavBar }
}