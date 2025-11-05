import { motion } from "framer-motion";
import { Linkedin, Mail, Globe, Phone } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      label: "LinkedIn",
      value: "clarence-kenneth-acedillo-756a9038b",
      url: "https://www.linkedin.com/in/clarence-kenneth-acedillo-756a9038b/",
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      bg: "from-blue-500/20 to-blue-700/20",
    },
    {
      label: "Indeed",
      value: "Profile Link",
      url: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      bg: "from-indigo-500/20 to-indigo-800/20",
    },
    {
      label: "Primary Email",
      value: "kennethace02@gmail.com",
      url: "mailto:kennethace02@gmail.com",
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      bg: "from-cyan-500/20 to-cyan-800/20",
    },
    {
      label: "Work Email",
      value: "kennethacedillo@gmail.com",
      url: "mailto:kennethacedillo@gmail.com",
      icon: <Mail className="w-6 h-6 text-green-400" />,
      bg: "from-green-500/20 to-green-800/20",
    },
    {
      label: "Other Email",
      value: "shirootagawa@gmail.com",
      url: "mailto:shirootagawa@gmail.com",
      icon: <Mail className="w-6 h-6 text-pink-400" />,
      bg: "from-pink-500/20 to-pink-800/20",
    },
    {
      label: "Viber",
      value: "+63 998 391 1305",
      url: "viber://chat?number=%2B639983911305",
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      bg: "from-purple-500/20 to-purple-800/20",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center p-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {contacts.map((item, index) => {
          const isViber = item.label === "Viber";

          const Wrapper = isViber ? motion.div : motion.a;

          const wrapperProps = isViber
            ? {
                whileHover: { scale: 1.05, y: -4 },
                onClick: (e: any) => e.preventDefault(),
                className: `bg-gradient-to-br ${item.bg} backdrop-blur-md rounded-xl p-5 flex items-center gap-4 border border-white/10 shadow-lg transition cursor-default`,
              }
            : {
                href: item.url,
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: { scale: 1.05, y: -4 },
                whileTap: { scale: 0.97 },
                className: `bg-gradient-to-br ${item.bg} backdrop-blur-md rounded-xl p-5 flex items-center gap-4 border border-white/10 shadow-lg transition`,
              };

          return (
            <Wrapper key={index} {...wrapperProps}>
              {item.icon}
              <div className="flex flex-col">
                <span className="font-semibold text-white">{item.label}</span>
                <span className="text-sm text-gray-300 break-all">{item.value}</span>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </motion.section>
  );
}
