import Link from "next/link"

export default function SecondaryButton({label, href}){
    return(
        <Link href={href} className="secondary-button">
            <p className="uppercase">{label}</p>
        </Link>
    )
}