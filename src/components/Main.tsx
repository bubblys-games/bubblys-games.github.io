'use client'

import Link from "next/link"
import Image from "next/image";

import Screenshot01 from '../assets/screenshot01.png'
import Screenshot02 from '../assets/screenshot02.png'
import Screenshot03 from '../assets/screenshot03.png'
import Screenshot04 from '../assets/screenshot04.png'

import iosPreorderBanner from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import androidDownloadBanner from '../assets/en_badge_web_generic.png'
import ImageSlider from '../components/Slider';

const slides = [
    {
        image: Screenshot01,
        texts: ['Dive into adventure in', `"Bubbly's Symphony"`, 'where the mysteries of the deep await!'],
    },
    {
        image: Screenshot02,
        texts: ['Master unique abilities to overcome', 'thrilling challenges', 'and protect the ocean!'],
    },
    {
        image: Screenshot03,
        texts: ['Face epic bosses in', 'monumental battles', 'that test your skills and strategy.'],
    },
    {
        image: Screenshot04,
        texts: ['Connect your gaming victories to', 'real-world actions', 'to protect our oceans!'],
    },
]

export default function MainContainer() {
    return (
        <main className="mt-5">
            <div className="mb-8">
                <Link href="https://apps.apple.com/us/app/bubblys-symphony/id6496065699">
                    <Image src={iosPreorderBanner} className="inline-flex ml-3" alt="Pre-order on the App Store" />
                </Link>
                <Link href='https://play.google.com/store/apps/details?id=com.luovanori.bubbly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <Image alt='Get it on Google Play' src={androidDownloadBanner} height="60" className="inline-flex" />
                </Link>
            </div>
            <div className="flex justify-center mb-8">
                <iframe style={{ border: 0, width: 320, height: 320 }} src="https://bandcamp.com/EmbeddedPlayer/album=3615477529/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
                    <a href="https://luovanori.bandcamp.com/album/bubblys-symphony-guardians-of-the-depths-original-game-soundtrack">Bubbly&#39;s Symphony: Guardians of the Depths (Original Game Soundtrack) by Studio Luovanori</a>
                </iframe>
            </div>
            <div>
                <ImageSlider slides={slides}/>
            </div>
        </main>
    )
}