import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { FC, JSX } from "react";

const headerVariants: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Header: FC = (): JSX.Element => {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <motion.div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-[#CA2424]" />
          <span className="text-xl font-bold">Nuwo Medical</span>
        </motion.div>
        <nav className="hidden md:flex gap-6">
          {["Home", "Products", "About", "Testimonials", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[#CA2424] transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div>
          <Button className="bg-[#CA2424] hover:bg-[#A51D1D] text-white">Contact Us</Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;