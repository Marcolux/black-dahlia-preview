import { motion } from "framer-motion";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // <motion.div
  //   initial={{ x: -20, y: 20, opacity: 0 }}
  //   animate={{ x: 0,   y: 0,   opacity: 1 }}
  //   exit={{ x: 20, y: 20, opacity: 0 }}
  //   transition={{ duration: .1, ease: "easeInOut" }}
  // >
  //   {children}
  // </motion.div>
  <motion.div
    className="page_transition_wrap"
    initial={{ transform: 'rotateY(30deg)' }}
    animate={{ transform: 'rotateY(0deg)' }}
    exit={{ transform: 'rotateY(0deg)' }}
    transition={{ duration: .2, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
)

export default PageTransition;
