import { motion } from "framer-motion";
import css from "styled-jsx/css";

export default function Home() {
  return (
<div>    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    /></div>
  );
}
