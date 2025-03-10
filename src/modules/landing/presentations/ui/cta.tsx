import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
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

const CallToAction: FC = (): JSX.Element => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" ref={ctaRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Enhance Your Healthcare Services?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our catalog of premium medical appliances or contact our team for personalized recommendations.
            </p>
          </div>
          <motion.div
            className="flex flex-col gap-2 min-[400px]:flex-row"
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={itemFadeIn}>
              <Button className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">Shop Now</Button>
            </motion.div>
            <motion.div variants={itemFadeIn}>
              <Button
                variant="outline"
                className="border-[#CA2424] text-[#CA2424] hover:bg-[#CA2424] hover:text-white"
              >
                Request Consultation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;