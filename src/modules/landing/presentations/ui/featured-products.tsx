import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

const FeaturedProducts: FC = (): JSX.Element => {
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 });

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32" ref={productsRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#CA2424]/10 px-3 py-1 text-sm text-[#CA2424]">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Medical Appliances</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of high-quality medical equipment designed for healthcare professionals and home
              care.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3"
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Product 1 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Digital Blood Pressure Monitor"
                width={400}
                height={400}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Digital Blood Pressure Monitor</h3>
              <p className="text-sm text-gray-500">Accurate and easy-to-use blood pressure monitoring device</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-[#CA2424]">$129.99</span>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button size="sm" className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Portable Oxygen Concentrator"
                width={400}
                height={400}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Portable Oxygen Concentrator</h3>
              <p className="text-sm text-gray-500">Lightweight and efficient oxygen therapy device</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-[#CA2424]">$899.99</span>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button size="sm" className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
            variants={itemFadeIn}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Digital Thermometer"
                width={400}
                height={400}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Digital Thermometer</h3>
              <p className="text-sm text-gray-500">Fast and accurate temperature measurement</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-[#CA2424]">$24.99</span>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button size="sm" className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={productsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div>
            <Button
              variant="outline"
              className="border-[#CA2424] text-[#CA2424] hover:bg-[#CA2424] hover:text-white"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;