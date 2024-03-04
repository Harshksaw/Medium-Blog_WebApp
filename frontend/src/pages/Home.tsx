
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl font-bold text-white mb-8">Welcome to Our Blog</h1>
        <p className="text-lg text-white mb-12">Where stories come to life</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-purple-500 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          Explore Now
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="absolute top-0 left-0 h-full w-full"
      >
        <img src="/path-to-your-image" alt="background" className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

export default HomePage;
