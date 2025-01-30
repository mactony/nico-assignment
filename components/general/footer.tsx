import { PenLine } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <PenLine className="h-6 w-6" />
              <span className="font-bold">Nick&apos;s Tutoring Hub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional academic writing services tailored to your needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/dissertation"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Dissertation Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/resume"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Resume Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/editing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Editing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/proofreading"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Proofreading
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nick&apos;s Tutoring Hub. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
