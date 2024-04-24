import screenshot01 from '../assets/screenshot01.png';
import screenshot02 from '../assets/screenshot02.png';
import screenshot03 from '../assets/screenshot03.png';
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

const images = [
    screenshot01, screenshot02, screenshot03
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
                <ImageSlider images={images}/>
            </SliderContainer>
        </Main>
    )
}