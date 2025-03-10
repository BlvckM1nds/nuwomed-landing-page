import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <motion.footer
      className="w-full border-t bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-[#CA2424]" />
              <span className="text-xl font-bold">Nuwo Medical</span>
            </div>
            <p className="text-sm text-gray-500">
              Providing high-quality medical equipment and appliances for healthcare professionals and home care.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Diagnostic Equipment", "Respiratory Care", "Patient Monitoring", "Home Care", "Mobility Aids"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, color: "#CA2424" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="#" className="hover:text-[#CA2424] transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {["About Us", "Careers", "Blog", "Press", "Partners"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#CA2424" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="hover:text-[#CA2424] transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Contact Us", "FAQs", "Shipping & Returns", "Warranty", "Technical Support"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#CA2424" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="hover:text-[#CA2424] transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row items-center justify-between border-t pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nuwo Medical Store. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link href="#" className="text-xs text-gray-500 hover:text-[#CA2424] transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
