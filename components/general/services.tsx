import { BookOpen, Edit, FileText, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Dissertation Writing",
    description: "Expert guidance and support for your thesis or dissertation",
    icon: GraduationCap,
    href: "/services/dissertation",
  },
  {
    title: "Resume Writing",
    description: "Professional resume writing to help you land your dream job",
    icon: FileText,
    href: "/services/resume",
  },
  {
    title: "Editing Services",
    description: "Comprehensive editing to perfect your academic work",
    icon: Edit,
    href: "/services/editing",
  },
  {
    title: "Proofreading",
    description:
      "Detailed proofreading to eliminate errors and improve clarity",
    icon: BookOpen,
    href: "/services/proofreading",
  },
];

export function Services() {
  return (
    <>
      <div className="relative bg-[#f4f4f2]">
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 xl:px-0 pb-12 md:pb-16 lg:pb-20 pt-12 md:pt-16 lg:pt-20 border-[#00000021] xl:border-x">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-flow-row gap-y-10">
              <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12">
                <div className="col-span-2 md:col-span-4 lg:col-span-7">
                  <div className="grid grid-flow-row gap-y-8">
                    <div className="grid grid-flow-row gap-y-5">
                      <div className="grid grid-flow-row gap-y-2">
                        <div className="font-medium text-[#00000085]">
                          Services Overview
                        </div>
                        <h2 className="text-[36px] text-[#151515] font-semibold">
                          Solutions in all Academic Areas
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <service.icon className="w-12 h-12 text-[#151515] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#00000085]">{service.description}</p>
                </div>
              ))}
            </div> */}

              <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 gap-y-6 lg:gap-y-12">
                {services.map((service) => (
                  <div className="col-span-2 lg:col-span-4" key={service.href}>
                    <div className="relative grid max-w-2xl content-start gap-4 grid-flow-row">
                      {/* <service.icon className="flex-shrink-0 text-[#000c]" /> */}
                      <svg
                        className="flex-shrink-0 text-[#000c]"
                        height="48px"
                        role="img"
                        viewBox="0 0 48 48"
                        width="48px"
                        fill="currentcolor"
                      >
                        <g fill-rule="nonzero">
                          <path
                            d="M46.5 47.04h-45a.54.54 0 0 1-.54-.54v-45A.54.54 0 0 1 1.5.96h45a.54.54 0 0 1 .54.54v45a.54.54 0 0 1-.54.54ZM2.04 45.96h43.92V18.54H2.04v27.42Zm16.5-28.5h27.42V2.04H18.54v15.42Zm-16.5 0h15.42V2.04H2.04v15.42ZM13.5 41.04c-4.434 0-8.04-3.608-8.04-8.04h1.08a6.968 6.968 0 0 0 6.96 6.96A6.968 6.968 0 0 0 20.46 33a6.967 6.967 0 0 0-6.96-6.96v-1.08c4.434 0 8.04 3.607 8.04 8.04 0 4.432-3.606 8.04-8.04 8.04Zm27.54-.54h-1.08V24h1.081l-.001 16.5Zm-6 0h-1.08v-12h1.081l-.001 12Zm-6 0h-1.08V36h1.081l-.001 4.5Z"
                            role="presentation"
                            fill-rule="evenodd"
                          ></path>
                          <path
                            d="m9.75 8.402 3.75-1.23V6H6v1.172l3.75 1.23ZM6 8.285V13.5h1.758V8.871L6 8.285ZM13.5 8.285V13.5h-1.758V8.871l1.758-.586ZM10.629 9.223l-.405.135c-.176.058-.264.088-.354.1-.08.01-.16.01-.24 0a1.979 1.979 0 0 1-.354-.1l-.405-.135V13.5h1.758V9.223Z"
                            role="presentation"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      <div className="grid grid-flow-row gap-y-2">
                        <div className="grid grid-flow-row gap-y-2">
                          <h2 className="text-[18px] font-semibold text-[#151515]">
                            {service.title}
                          </h2>
                        </div>
                        <div className="grid gap-y-3 text-[#000c] text-base">
                          <p className="text-pretty max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#f4f4f2]">
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 xl:px-0 pb-12 md:pb-16 lg:pb-20 pt-12 md:pt-16 lg:pt-20 border-[#00000021] xl:border-x">
          <div className="max-w-7xl mx-auto">
            <blockquote className="grid grid-flow-row bg-[#c4e0fa] w-full justify-items-center gap-3 text-center px-6 py-12 md:py-16">
              <div className="grid gap-y-3 text-[18px] text-[#151515]">
                <p className="text-prose max-w-prose italic">
                  " The dissertation support I received was exceptional. The
                  team helped me structure my research effectively. Their
                  editing services transformed my thesis. The attention to
                  detail was impressive."
                </p>
              </div>
              <p className="text-[18px] text-[#00000085] font-semibold">
                Nadal P. - Montana State University
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
