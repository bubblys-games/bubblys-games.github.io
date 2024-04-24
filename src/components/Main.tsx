import screenshot01 from '../assets/screenshot01.png';
import screenshot02 from '../assets/screenshot02.png';
import screenshot03 from '../assets/screenshot03.png';
import screenshot04 from '../assets/screenshot04.png';
import iosPreorderBanner from '../assets/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg'
import ImageSlider from '../components/Slider';

import styled from '@emotion/styled'
import { Link } from "react-router-dom"

const Main = styled.main`
    margin: 20px auto;
`

const DownloadsContainer = styled.div`
    margin-bottom: 40px;
`

const SliderContainer = styled.div`
    img {
        display: block;
    }
`

const slides = [
    {
        imageUrl: screenshot01,
        text: `<p>Dive into adventure in<br /><em>"Bubbly's Symphony"</em><br />where the mysteries of the deep await!</p>`,
    },
    {
        imageUrl: screenshot02,
        text: '<p>Master unique abilities to overcome<br /><em>thrilling challenges</em><br />and protect the ocean!</p>',
    },
    {
        imageUrl: screenshot03,
        text: '<p>Face epic bosses in<br /><em>monumental battles</em><br />that test your skills and strategy.</p>',
    },
    {
        imageUrl: screenshot04,
        text: '<p>Connect your gaming victories to<br /><em>real-world actions</em><br />to protect our oceans!</p>',
    },
]

export default function MainContainer() {
    return (
        <Main>
            <DownloadsContainer>
                <Link to={'https://apps.apple.com/us/app/bubblys-symphony/id6496065699'}>
                    <img src={iosPreorderBanner} className="ios-preorder-banner" alt="Pre-order on the App Store" />
                </Link>
            </DownloadsContainer>
            <SliderContainer>
                <ImageSlider slides={slides}/>
            </SliderContainer>
        </Main>
    )
}