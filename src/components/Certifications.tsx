import { motion } from "framer-motion";
import type { JSX } from "react";
import { useState } from "react";

import Cert1 from "../assets/images/Certificate-marketing.jpg";
import Cert2 from "../assets/images/Certificate-Midterm.jpg";
import Cert3 from "../assets/images/Certificate-python.jpg";
import Cert4 from "../assets/images/CertificateSql.jpg";
import Cert5 from "../assets/images/MonadCertificate.jpg";

const certifications = [Cert1, Cert2, Cert3, Cert4, Cert5];

export default function Certification(): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certifications" className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-wider">
          CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="overflow-hidden rounded-2xl cursor-pointer transform transition-all"
              onClick={() => setSelected(cert)}
            >
              <img
                src={cert}
                alt={`Certification ${index + 1}`}
                className="w-full h-64 md:h-72 object-cover rounded-2xl transition-all duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 cursor-pointer"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              alt="Selected Certification"
              layout
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
