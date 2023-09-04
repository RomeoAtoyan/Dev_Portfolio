import { motion } from "framer-motion";

const MoveDown = ({ children, transition, initialY, inViewY }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: inViewY }}
      transition={{ duration: transition ? transition : 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MoveDown;
