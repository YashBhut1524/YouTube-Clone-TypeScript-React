import { Clapperboard, Home, Library, Repeat, History, PlaySquare, Clock, ListVideo, ShoppingBag, Music2, Film, TrendingUp, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from 'lucide-react'
import SmallSidebarItem from '../components/SmallSidebarItem'
import LargeSidebarSection from '../components/LargeSidebarSection';
import LargeSidebarItem from '../components/LargeSidebarItem'
import { playlists, subscriptions } from '../data/sidebar';
import { useSidebarContext } from '../context/SidebarContext';
import PageHeaderFirstSection from '../components/PageHeaderFirstSection';

function Sidebar() {

    const { isLargeOpen, isSmallOpen } = useSidebarContext()

    return (
        <>
            <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1  
                        ${isLargeOpen ? "lg:hidden" : "lg:flex"}`}
            >
                <SmallSidebarItem Icon={Home} title="Home" url="/" />
                <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
                <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
                <SmallSidebarItem Icon={Library} title="Library" url="/library" />
            </aside>

            {isSmallOpen && (
                <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" />
            )}


            <aside className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex
                        ${isLargeOpen ? "lg:flex" : "lg:hidden"}    
                        ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}
                    `}
            >
                <div className=' pt-2 pb-4 px-2 sticky top-0 bg-white lg:hidden'>
                    <PageHeaderFirstSection />
                </div>
                <LargeSidebarSection >
                    <LargeSidebarItem IconorImgUrl={Home} title="Home" url="/" />
                    <LargeSidebarItem IconorImgUrl={Clapperboard} title="Subscriptions" url="/subscriptions" />
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection visibleItemCount={5}>
                    <LargeSidebarItem IconorImgUrl={Library} title="Library" url="/library" />
                    <LargeSidebarItem IconorImgUrl={History} title="History" url="/history" />
                    <LargeSidebarItem IconorImgUrl={PlaySquare} title="Your Videos" url="/your-videos" />
                    <LargeSidebarItem IconorImgUrl={Clock} title="Watch Later" url="/playlist?list=WL" />
                    {playlists.map(playlist => (
                        <LargeSidebarItem key={playlist.id} IconorImgUrl={ListVideo} title={playlist.name} url={`/playlist?list=${playlist.id}`} />
                    ))}
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection title='Subscription' visibleItemCount={6}>
                    {subscriptions.map(item => (
                        <LargeSidebarItem key={item.id} IconorImgUrl={item.imgUrl} title={item.channelName} url={`/@${item.id}`} />
                    ))}
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection title='Explore' >
                    <LargeSidebarItem IconorImgUrl={TrendingUp} title="Trending" url="/trending" />
                    <LargeSidebarItem IconorImgUrl={ShoppingBag} title="Shopping" url="/shopping" />
                    <LargeSidebarItem IconorImgUrl={Music2} title="Music" url="/music" />
                    <LargeSidebarItem IconorImgUrl={Film} title="Movie & TV" url="/music" />
                    <LargeSidebarItem IconorImgUrl={Radio} title="Live" url="/live" />
                    <LargeSidebarItem IconorImgUrl={Gamepad2} title="Gaming" url="/gaming" />
                    <LargeSidebarItem IconorImgUrl={Newspaper} title="News" url="/news" />
                    <LargeSidebarItem IconorImgUrl={Trophy} title="Sports" url="/sports" />
                    <LargeSidebarItem IconorImgUrl={Lightbulb} title="Learning" url="/learning" />
                    <LargeSidebarItem IconorImgUrl={Shirt} title="Fashion & Beauty" url="/fashion-beauty" />
                    <LargeSidebarItem IconorImgUrl={Podcast} title="Podcast" url="/podcast" />
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection>
                    <div >
                        <p className='text-[13px] pb-4'>About Press Copyright Contact us Creator Advertise Developers</p>
                        <p className='text-[13px] pb-2'>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                        <p className='text-[10px] text-gray-900'>© 2024 Google LLC</p>
                    </div>
                </LargeSidebarSection>
            </aside>
        </>

    )
}

export default Sidebar