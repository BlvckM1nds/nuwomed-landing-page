import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, JSX } from "react";

const Hero: FC = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Advanced Medical Appliances for Better Healthcare
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuwo Medical Store provides high-quality medical equipment and appliances for hospitals, clinics, and
              home care.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div>
                <Button className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">Browse Products</Button>
              </motion.div>
              <motion.div>
                <Button
                  variant="outline"
                  className="border-[#CA2424] text-[#CA2424] hover:bg-[#CA2424] hover:text-white"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto w-full max-w-[500px] lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/placeholder.svg?height=550&width=550"
              alt="Medical Equipment"
              width={550}
              height={550}
              className="w-full rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;