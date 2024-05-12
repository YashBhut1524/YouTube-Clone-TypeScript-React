import { Menu } from 'lucide-react'
import Button from './Button'
import ytLogoWithText from "../assets/youtube-logo-icon.svg"
import { useSidebarContext } from "../context/SidebarContext";


type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {

    const { toggle } = useSidebarContext()

    return (
        < div className={`flex gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`
        }>
            <Button onClick={toggle} variant="ghost" size="icon" className="">
                <Menu />
            </Button>
            <a href="/">
                <img src={ytLogoWithText} alt="YouTube" className="h-6" />
            </a>
        </ div >
    )
}

export default PageHeaderFirstSection