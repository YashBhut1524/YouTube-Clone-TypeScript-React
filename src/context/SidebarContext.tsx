import { useContext, createContext, ReactNode, useState } from "react"

type SidebarProviderPorps = {
    children: ReactNode
}

type SidebarContextType = {
    isLargeOpen: boolean,
    isSmallOpen: boolean,
    toggle: () => void,
    close: () => void
}

const SidebarContext = createContext<SidebarContextType | null>(null)

export function useSidebarContext() {
    const value = useContext(SidebarContext)
    if (value === null) throw Error("Can't use outside of SidebarProvider")

    return value
}

export function SidebarProvider({ children }: SidebarProviderPorps) {

    const [isLargeOpen, setIsLargeOpen] = useState(true)
    const [isSmallOpen, setIsSmallOpen] = useState(false)

    function isScreenSmall() {
        return window.innerWidth < 1024
    }

    function toggle() {
        if (isScreenSmall()) {
            setIsSmallOpen(!isSmallOpen)
        } else {
            setIsLargeOpen(!isLargeOpen)
        }
    }

    function close() {
        if (isScreenSmall()) {
            setIsSmallOpen(false)
        } else {
            setIsLargeOpen(false)
        }
    }

    return (
        <SidebarContext.Provider value={{ isLargeOpen, isSmallOpen, toggle, close }}>
            {children}
        </SidebarContext.Provider>
    )

}
