import Link from "next/link"
import Image from "next/image"

import icon from '../../public/icon.png'

export default function HeaderContainer() {
    return (
        <header className="mt-20 mx-10 mb-5 text-left animate-float">
            <Link href="/" className="inline-block">
                <Image src={icon} className="inline-block w-36 h-36" alt="Bubbly's Symphony: Guardians of the Depths" />
            </Link>
        </header>
    );
}