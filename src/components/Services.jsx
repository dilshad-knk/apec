import { Code, Globe, Cloud, Shield, CircleCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      items: ["UI/UX", "DevOps", "Web design", "Frontend dev", "Backend dev"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "MSP",
      items: [
        "Infrastructure management",
        "Managed Monitoring",
        "Business Continuity",
        "Managed Cyber",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud",
      items: [
        "AWS",
        "AZURE",
        "Multi-Cloud",
        "SRE Strategy",
        "Serverless",
        "Hybrid Strategy",
        "Containerisation",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber",
      items: [
        "Cyber Audit",
        "Cyber governance",
        "Security as a service",
        "Penetration Testing",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What we offer</h2>
          <p className="text-gray-400 p-3 border inline rounded-full border-red-600">
            Our Experts Will Help You In Following Fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-red-500/70 overflow-hidden   pt-6 ps-6 rounded-xl hover:bg-red-950/40 transition-colors"
            >
              <div className="text-white mb-4">{service.icon}</div>
              <div className=" rounded-tl-lg h-full  bg-red-900 p-3">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 list-none">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 flex items-center gap-2"
                    >
                      <span className=""><CircleCheck className="h-4 text-white w-4" /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



