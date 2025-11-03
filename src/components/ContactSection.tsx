import { motion } from "framer-motion";

export default function ContactSection() {
  const contacts = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/clarence-kenneth-acedillo-756a9038b/", color: "text-blue-400" },
    { name: "Indeed", url: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage", color: "text-blue-500" },
    { name: "Facebook", url: "https://www.facebook.com/kenshiroSpongeColaInTheHause/", color: "text-blue-700" },
    { name: "Primary Email", url: "mailto:kennethace02@gmail.com", color: "text-cyan-400" },
    { name: "Work Email", url: "mailto:kennethacedillo@gmail.com", color: "text-cyan-400" },
    { name: "Other Email", url: "mailto:shirootagawa@gmail.com", color: "text-cyan-400" },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center p-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-8 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Feel free to connect with me on LinkedIn, Indeed, Facebook, or via email.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.2 }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contact.color} hover:underline text-lg sm:text-xl`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {contact.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
