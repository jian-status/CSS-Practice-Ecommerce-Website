// icons
import Facebook from './assets/facebook-svgrepo-com.svg?react';
import Yelp from './assets/yelp-184-svgrepo-com.svg?react';
import Instagram from './assets/instagram-svgrepo-com.svg?react';

export default function SocialMediaSidebar() {
    return (
        <div className="fixed h-full w-10 z-[60] right-0 flex flex-col justify-center gap-5 items-center">
            <a href="https://facebook.com"><Facebook width="1.25rem" height="1.25rem"/></a>
            <a href="https://yelp.com"><Yelp width="1.25rem" height="1.25rem"/></a>
            <a href="https://instagram.com"><Instagram width="1.25rem" height="1.25rem"/></a>
        </div>
    )
}