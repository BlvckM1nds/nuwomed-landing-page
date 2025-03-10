import { motion, useInView, Variants } from "framer-motion";
import { Star } from "lucide-react";
import { FC, JSX, useRef } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

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

const Testimonials: FC = (): JSX.Element => {
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32" ref={testimonialsRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#CA2424]/10 px-3 py-1 text-sm text-[#CA2424]">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from healthcare professionals and patients who trust Nuwo Medical for their medical equipment
              needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="rounded-lg border bg-background p-6 shadow-sm"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-[#CA2424] flex items-center justify-center text-white font-bold">
                  DR
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Robert Chen</h3>
                <p className="text-sm text-gray-500">Cardiologist</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#CA2424] text-[#CA2424]" />
              ))}
            </div>
            <p className="text-gray-500">
              &quot;The medical equipment from Nuwo Medical has significantly improved our patient care. The quality and
              reliability of their products are exceptional.&quot;
            </p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="rounded-lg border bg-background p-6 shadow-sm"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-[#CA2424] flex items-center justify-center text-white font-bold">
                  SJ
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Clinic Manager</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#CA2424] text-[#CA2424]" />
              ))}
            </div>
            <p className="text-gray-500">
              &quot;Nuwo Medical&apos;s customer service is outstanding. They helped us find the perfect equipment for our
              clinic and provided excellent training.&quot;
            </p>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="rounded-lg border bg-background p-6 shadow-sm"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-[#CA2424] flex items-center justify-center text-white font-bold">
                  MP
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Michael Patel</h3>
                <p className="text-sm text-gray-500">Home Care Patient</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#CA2424] text-[#CA2424]" />
              ))}
            </div>
            <p className="text-gray-500">
              &quot;The portable oxygen concentrator I purchased from Nuwo Medical has given me back my independence.
              It&apos;s reliable, easy to use, and their support team is always available.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;