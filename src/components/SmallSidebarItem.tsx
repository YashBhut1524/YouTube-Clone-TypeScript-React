import { ElementType } from 'react'
import { buttonStyles } from './Button'

type SmallSidebarItemProps = {
    Icon: ElementType,
    title: string,
    url: string
}

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
    return (
        <a href={url} className={`py-4 px-1 flex flex-col items-center rounded-lg gap-1 ${buttonStyles({ variant: "ghost" })}`}>
            <Icon className="w-6 h-6" />
            <div className='text-sm'>{title}</div>
        </a>
    )
}

export default SmallSidebarItem