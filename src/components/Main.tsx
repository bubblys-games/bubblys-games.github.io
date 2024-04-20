import iosPreorderBanner from '../assets/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg'

import styled from '@emotion/styled'
import { Link } from "react-router-dom"

const Main = styled.main`
    margin-top: 20px;
`

export default function MainContainer() {
    return (
        <Main>
            <Link to={'https://apps.apple.com/us/app/bubblys-symphony/id6496065699'}>
                <img src={iosPreorderBanner} className="ios-preorder-banner" alt="Pre-order on the App Store" />
            </Link>
        </Main>
    )
}