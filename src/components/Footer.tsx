'use client'

import Link from "next/link"
import { XLogo, InstagramLogo, YoutubeLogo, TwitchLogo, DiscordLogo } from "@phosphor-icons/react/dist/ssr";

export default function FooterContainer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="box-border px-0 py-16 md:py-16 w-full text-5b3f3e">
      <div className="mb-6">
        <Link href="https://x.com/bubbly_robot" className="inline-flex mr-5 text-4xl" target="_blank"><XLogo /></Link>
        <Link href="https://www.instagram.com/bubbly_robot/" className="inline-flex mr-5 text-4xl" target="_blank"><InstagramLogo /></Link>
        <Link href="https://www.youtube.com/@BubblysSymphony" className="inline-flex mr-5 text-4xl" target="_blank"><YoutubeLogo /></Link>
        <Link href="https://www.twitch.tv/senamonry" className="inline-flex mr-5 text-4xl" target="_blank"><TwitchLogo /></Link>
        <Link href="https://discord.gg/9abeaP2eb7" className="inline-flex text-4xl" target="_blank"><DiscordLogo /></Link>
      </div>
      <Link href="/terms" className="mr-5 text-[#eae6cf] text-md" onClick={scrollToTop}>Terms of Conduct</Link>
      <Link href="/privacy" className="mr-5 text-[#eae6cf] text-md" onClick={scrollToTop}>Privacy Policy</Link>
      <a href="mailto:support@bubblys.games" className="text-[#eae6cf]">Contact</a>
      <p className="my-4 text-[#5b3f3e] text-sm">© {new Date().getFullYear()} Seungmin Lee. All rights reserved.</p>
    </footer>
  )
}