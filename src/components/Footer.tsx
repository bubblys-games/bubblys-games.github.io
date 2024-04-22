import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import { XLogo, InstagramLogo, YoutubeLogo, TwitchLogo, DiscordLogo } from "@phosphor-icons/react";

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 2%;
  color: #5b3f3e;
  transform: translateX(-50%);

  a {
    margin-right: 20px;
    color: #eae6cf;

    :last-of-type {
      margin-right: 0;
    }
  }
`

const Socials = styled.div`
  margin-bottom: 16px;

  a {
    font-size: 36px;
    color: #ffffff;
  }
`

export default function FooterContainer() {
    return (
        <Footer>
          <Socials>
            <Link to={'https://x.com/bubbly_robot'} target="_blank"><XLogo /></Link>
            <Link to={'https://www.instagram.com/bubbly_robot/'} target="_blank"><InstagramLogo /></Link>
            <Link to={'https://www.youtube.com/@BubblysSymphony'} target="_blank"><YoutubeLogo /></Link>
            <Link to={'https://www.twitch.tv/senamonry'} target="_blank"><TwitchLogo /></Link>
            <Link to={'https://discord.gg/9abeaP2eb7'} target="_blank"><DiscordLogo /></Link>
          </Socials>
          <Link to={'/terms'}>Terms of Conduct</Link>
          <Link to={'/privacy'}>Privacy Policy</Link>
          <a href="mailto:support@bubblys.games">Contact</a>
          <p>© {new Date().getFullYear()} Seungmin Lee. All rights reserved.</p>
        </Footer>
    )
}