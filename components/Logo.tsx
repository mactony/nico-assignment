import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="hidden lg:flex"
        src="/assets/logo.svg"
        width={40}
        height={40}
        alt="nico assignment"
      />
      <Image
        className="lg:hidden flex"
        src="/assets/logo.svg"
        width={40}
        height={40}
        alt="nico assignment"
      />
    </Link>
  );
}
