import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
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

const About: FC = (): JSX.Element => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" ref={aboutRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="mx-auto w-full max-w-[500px] lg:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/placeholder.svg?height=550&width=550"
              alt="About Nuwo Medical"
              width={550}
              height={550}
              className="w-full rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block rounded-lg bg-[#CA2424]/10 px-3 py-1 text-sm text-[#CA2424]">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Committed to Quality Healthcare
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Nuwo Medical Store, we&apos;ve been providing high-quality medical equipment and appliances for over 15
              years. Our mission is to improve healthcare outcomes through reliable, innovative, and accessible
              medical technology.
            </p>
            <motion.ul
              className="grid gap-2"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                "Premium quality medical equipment",
                "Expert consultation and support",
                "Warranty and maintenance services",
                "Fast and reliable delivery",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-center gap-2" variants={itemFadeIn}>
                  <ChevronRight className="h-4 w-4 text-[#CA2424]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div>
              <Button className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">Learn More About Us</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;