import { Heart } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    category: "Products",
    links: [
      { name: "Payments", url: "/payments" },
      { name: "Assignments", url: "/assignments" },
      { name: "Course Work", url: "/course-work" },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "About", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Pricing", url: "/pricing" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    category: "Insights",
    links: [
      { name: "Learn", url: "/learn" },
      { name: "Journal", url: "/journal" },
      { name: "Reading Lists", url: "/reading-lists" },
      { name: "Knowledge Hub", url: "/knowledge-hub" },
    ],
  },
  {
    category: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    // <footer className="relative border-t border-[#20293a] py-12">
    //   <div className="max-w-7xl mx-auto w-full px-4 text-center md:px-6 lg:text-left">
    //     <div className="lg:flex lg:justify-between">
    //       <div className="flex items-center justify-center space-x-4">
    //         <Link
    //           href="/contact"
    //           className="rounded-sm font-medium text-gray-500 hover:text-gray-300 focus:outline"
    //         >
    //           <Linkedin className="size-4" />
    //         </Link>
    //         <Link
    //           href="/contact"
    //           className="rounded-sm font-medium text-gray-500 hover:text-gray-300 focus:outline"
    //         >
    //           <Facebook className="size-4" />
    //         </Link>
    //       </div>
    //       <p className="mt-8 text-sm text-gray-400 lg:mt-0">
    //         &copy; {new Date().getFullYear()} Nicks Pro. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="relative bg-[#151515]">
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 border-[#ffffff21] xl:border-x pb-6 pt-10 md:pb-10 lg:pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-flow-row gap-10 pb-10">
            <div className="text-[#fffc] w-full flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex w-full gap-y-4 flex-col md:flex-row">
                <div className="grid grid-flow-row w-full md:items-center gap-y-4">
                  <h3 className="font-semibold text-white text-base">
                    Reach us for instant help
                  </h3>
                  <div className="grid gap-y-3 text-[#ffffff85] text-base">
                    <p className="text-pretty max-w-2xl">
                      We can help you submit quality work before deadline at
                      cheaper price
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-fit h-fit flex-row items-center group transition-colors duration-150 ease-in-out flex font-semibold outline-none focus:outline-none whitespace-nowrap !text-nowrap rounded-sm bg-[#54aeff] text-[#222220] py-2 px-4 text-base md:ml-auto"
                >
                  Get Instant Help
                </Link>
              </div>
            </div>
            <hr className="border-[#ffffff21]" />

            <article className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 gap-y-10">
              {footerLinks.map((section) => (
                <div
                  className="col-span-1 lg:col-span-3"
                  key={section.category}
                >
                  <div className="grid grid-flow-row gap-2">
                    <h2 className="text-base text-[#fffc] font-bold">
                      {section.category}
                    </h2>

                    {section.links.map((link) => (
                      <div
                        className="grid grid-cols-2 justify-items-start gap-x-6 gap-y-2 lg:gap-x-12"
                        key={link.url}
                      >
                        <Link
                          href={link.url}
                          className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 text-[15px] text-[#ffffff85] hover:text-[#fffc]"
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </div>
          <div className="border-[#ffffff21] grid grid-flow-col gap-3 border-t pt-6 md:gap-4 lg:flex lg:items-center">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
              <Link
                href="/"
                className="text-[#ffffffc1] flex-row items-center group transition-colors duration-150 ease-in-out gap-2 -m-1 block h-auto w-auto p-1"
              >
                N.
              </Link>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
              <p className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 cursor transition-150 text-[#ffffff85] text-[14px] -mx-1 flex rounded-md px-1 py-1 whitespace-nowrap">
                Made with <Heart className="size-3 text-red-400" /> in Nairobi
              </p>
            </div>
            <div className="col-start-1 col-end-3 row-start-3 row-end-4 mt-1 md:col-start-2 md:row-start-2 md:mt-0 md:justify-self-end lg:mr-2.5 lg:ml-auto">
              <div className="grid grid-flow-row justify-items-start gap-4 md:grid-flow-col md:items-center md:justify-end">
                <p className="text-[14px] text-[#ffffff85]">
                  &copy; {new Date().getFullYear()} Nicks Pro.
                </p>
                <p className="flex-row items-center group transition-colors duration-150 ease-in-out gap-2 text-[14px] text-[#ffffff85] hover:text-[#fffc]">
                  All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end">
              <div className="flex items-center gap-5">
                <Link
                  href="https://twitter.com"
                  aria-label="Nicks Pro on Twitter"
                  target="_blank"
                  rel="norefferer"
                  className="text-white flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex whitespace-nowrap"
                >
                  <svg
                    className="text-[#ffffff85] hover:text-[#fffc] duration-150 ease-in-out transition-all"
                    height="1.35em"
                    width="1.35em"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentcolor"
                  >
                    <g fill-rule="nonzero">
                      <path
                        d="M13.7124 10.7893L20.4133 3H18.8255L13.0071 9.7633L8.35992 3H3L10.0274 13.2273L3 21.3955H4.58799L10.7324 14.2533L15.6401 21.3955H21L13.7121 10.7893H13.7124ZM11.5375 13.3174L10.8255 12.299L5.16016 4.19542H7.59922L12.1712 10.7353L12.8832 11.7537L18.8262 20.2545H16.3871L11.5375 13.3178V13.3174Z"
                        role="presentation"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  aria-label="Nicks Pro on Twitter"
                  target="_blank"
                  rel="norefferer"
                  className=" flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex whitespace-nowrap"
                >
                  <svg
                    className="text-[#ffffff85] hover:text-[#fffc] duration-150 ease-in-out transition-all"
                    height="1.35em"
                    width="1.35em"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentcolor"
                  >
                    <g fill-rule="nonzero">
                      <path
                        d="M20.179 2.4H3.818c-.784 0-1.418.619-1.418 1.384v16.428c0 .765.634 1.388 1.418 1.388h16.36c.784 0 1.422-.623 1.422-1.384V3.784c0-.765-.638-1.384-1.421-1.384ZM8.096 18.761h-2.85V9.596h2.85v9.165ZM6.671 8.348a1.65 1.65 0 1 1-.006-3.302 1.65 1.65 0 0 1 .006 3.302Zm12.09 10.413h-2.846v-4.455c0-1.061-.019-2.43-1.481-2.43-1.481 0-1.707 1.159-1.707 2.355v4.53H9.885V9.596h2.73v1.253h.037c.38-.72 1.31-1.481 2.693-1.481 2.884 0 3.416 1.897 3.416 4.364v5.03Z"
                        role="presentation"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </Link>
                <Link
                  href="https://whatsapp.com"
                  aria-label="Nicks Pro on Twitter"
                  target="_blank"
                  rel="norefferer"
                  className="text-white flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 256 259"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
                      fill="#00E676"
                    />
                    <path
                      d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
                      fill="#FFF"
                    />
                  </svg>
                </Link>
                {/* <Link
                  href="https://facebook.com"
                  aria-label="Nicks Pro on Twitter"
                  target="_blank"
                  rel="norefferer"
                  className="text-white flex-row items-center group transition-colors duration-150 ease-in-out gap-2 flex whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="url(#a)"
                    height="18"
                    width="18"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        x2="50%"
                        y1="97.078%"
                        y2="0%"
                        id="a"
                      >
                        <stop offset="0%" stop-color="#0062E0" />
                        <stop offset="100%" stop-color="#19AFFF" />
                      </linearGradient>
                    </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                    <path
                      fill="#FFF"
                      d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
