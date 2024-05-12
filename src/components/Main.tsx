import Link from "next/link"
import Image from "next/image";

import Screenshot01 from '../assets/screenshot01.png'
import Screenshot02 from '../assets/screenshot02.png'
import Screenshot03 from '../assets/screenshot03.png'
import Screenshot04 from '../assets/screenshot04.png'

import iosPreorderBanner from '../assets/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg'
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
                    <Image src={iosPreorderBanner} className="inline-flex" alt="Pre-order on the App Store" />
                </Link>
                <Link href='https://play.google.com/store/apps/details?id=com.luovanori.bubbly&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <Image alt='Get it on Google Play' src={androidDownloadBanner} height="60" className="inline-flex" />
                </Link>
            </div>
            <div>
                <ImageSlider slides={slides}/>
            </div>
        </main>
    )
}