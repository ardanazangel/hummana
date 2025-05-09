import Link from "next/link";

export default function Button({ href, label, colorMode }) {
  return (
    <Link href={href} className={`button ${colorMode}`}>
      {label}
    </Link>
  );
}
