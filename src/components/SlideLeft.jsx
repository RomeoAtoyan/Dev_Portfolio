import { motion } from "framer-motion";

const SlideIn = ({ children, transition }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-30px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: transition ? transition : 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
