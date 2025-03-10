import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FC, JSX, useRef } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ContactForm: FC = (): JSX.Element => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#CA2424] text-white" ref={contactRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about our products or services? Contact us today and our team will be happy to assist
              you.
            </p>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
                { icon: <Mail className="h-5 w-5" />, text: "info@nuwomedical.com" },
                { icon: <MapPin className="h-5 w-5" />, text: "123 Medical Center Drive, Health City, HC 12345" },
                { icon: <Clock className="h-5 w-5" />, text: "Monday - Friday: 9:00 AM - 6:00 PM" },
              ].map((item, index) => (
                <motion.div key={index} className="flex items-center gap-2" variants={itemFadeIn}>
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-lg bg-white p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-[#CA2424] hover:bg-[#A51D1D] text-white">Send Message</Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;