import Link from "next/link";
import { useMemo } from "react";

export default function SecondaryButton({ label, href, isBlack = false }) {
  const buttonClass = useMemo(
    () => (isBlack ? "secondary-button black" : "secondary-button"),
    [isBlack]
  );

  return (
    <Link href={href} className={buttonClass}>
      <p className="uppercase">{label}</p>
    </Link>
  );
}
