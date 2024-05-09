
import Image from "next/image";

import MainContainer from "@/components/Main";
import logo from '@/assets/logo.png'

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <div className="animate-float">
        <Image src={logo} className="logo inline-flex mt-9 max-w-screen-md w-full" priority={true} alt="Bubbly's Symphony: Guardians of the Depths" />
      </div>
      <MainContainer />
    </>
  )
}
