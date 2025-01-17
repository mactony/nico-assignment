import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-black p-8 space-y-6">
      <div className="text-white flex space-x-4 text-sm md:text-base">
        <Link href="#">Contact Us</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Reading lists</Link>
      </div>
      <Separator />
      <div className="text-white flex space-x-4 text-sm md:text-base">
        <Link href="#">Privacy policy</Link>
        <Link href="#">Terms of use</Link>
        <Link href="#">Accessibility statements</Link>
      </div>
    </footer>
  );
}
