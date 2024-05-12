import { useEffect, useRef, useState } from "react";
import { formateDuration } from "../utils/formateDuration";
import { formatTimeAgo } from "./formatTimeAgo";

type VideoGridItemProps = {
    id: string;
    title: string;
    channel: {
        id: string;
        name: string;
        profileUrl: string;
    };
    views: number;
    postedAt: Date;
    duration: number;
    thumbnailUrl: string;
    videoUrl: string;
};

const VIEW_FORMATTER = Intl.NumberFormat(undefined, { notation: "compact" });

function VideoGridItem({ id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }: VideoGridItemProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const handleMouseEnter = () => {
            setIsVideoPlaying(true);
        };

        const handleMouseLeave = () => {
            setIsVideoPlaying(false);
            // Pause the video when mouse leaves
            videoElement.pause();
        };

        videoElement.addEventListener("mouseenter", handleMouseEnter);
        videoElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            videoElement.removeEventListener("mouseenter", handleMouseEnter);
            videoElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        // Reset the video playback when `isVideoPlaying` changes
        if (isVideoPlaying) {
            videoElement.currentTime = 0;
            videoElement.play();
        } else {
            videoElement.pause();
        }
    }, [isVideoPlaying]);

    return (
        <div className="flex flex-col gap-2">
            <a href={`/watch?v=${id}`} className="relative aspect-video">
                <img src={thumbnailUrl} className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"}`} />
                <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
                    {formateDuration(duration)}
                </div>
                <video
                    className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"}`}
                    src={videoUrl}
                    ref={videoRef}
                    muted
                    playsInline
                />
            </a>
            <div className="flex gap-2">
                <a href={`/@${channel.id}`} className="flex shrink-0">
                    <img src={channel.profileUrl} className="w-12 h-12 rounded-full" alt={channel.name} />
                </a>
                <div className="flex flex-col">
                    <a href={`/watch?v=${id}`} className="font-bold">{title}</a>
                    <a href={`/@${channel.id}`} className="text-secondary-text">{channel.name}</a>
                    <div className="text-secondary-text text-sm">{VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}</div>
                </div>
            </div>
        </div>
    );
}

export default VideoGridItem;
