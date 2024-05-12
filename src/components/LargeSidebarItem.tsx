import { ElementType } from 'react'
import { buttonStyles } from './Button'

type LargeSidebarItemProps = {
    IconorImgUrl: ElementType | string,
    title: string,
    url: string
    isActive?: boolean
}

function LargeSidebarItem({ IconorImgUrl, title, url, isActive = false }: LargeSidebarItemProps) {
    return (
        <a href={url} className={`${buttonStyles({ variant: "ghost" })} ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : ""} 
                            w-full flex items-center rounded-lg gap-4 p-3`}
        >
            {typeof IconorImgUrl === "string" ? (
                <img src={IconorImgUrl} className='w-6 h-6 rounded-full' />
            ) : (
                <IconorImgUrl className="w-6 h-6" />
            )}
            <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{title}</div>
        </a>
    )
}

export default LargeSidebarItem