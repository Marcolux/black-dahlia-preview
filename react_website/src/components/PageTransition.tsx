import { motion } from "framer-motion";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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
