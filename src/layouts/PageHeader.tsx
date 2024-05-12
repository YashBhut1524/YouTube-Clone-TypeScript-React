import { ArrowLeft, Bell, Mic, Search, Upload, User } from "lucide-react"
import Button from '../components/Button';
import { useState } from "react";
import PageHeaderFirstSection from "../components/PageHeaderFirstSection";


const PageHeader = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

    return (
        <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
            <PageHeaderFirstSection hidden={showFullWidthSearch} />
            {/* 2nd division of navbar */}
            <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                {showFullWidthSearch && (
                    <Button onClick={() => { setShowFullWidthSearch(false) }} className="flex-shrink-0" type="button" size="icon" variant="ghost">
                        <ArrowLeft />
                    </Button>
                )}
                {/* Search Bar and Mic */}
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary
                                    py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                    />
                    <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>
            {/* Notification and profile logo */}
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
                    <Search />
                </Button>
                <Button size="icon" variant="ghost" className="md:hidden"><Mic /></Button>
                <Button size="icon" variant="ghost"><Upload /></Button>
                <Button size="icon" variant="ghost"><Bell /></Button>
                <Button size="icon" variant="ghost"><User /></Button>
            </div>
        </div>
    )
}

export default PageHeader