import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ message, status }) => {
    return (
        <AnimatePresence>
            {status && (
                <motion.div
                    initial={{ top: "-100px" }}
                    animate={{ top: "10px" }}
                    style={{ transition: "ease-in-out" }}
                    exit={{ top: "-100px" }}
                    className="p-6 text-center text-lg font-bold bg-slate-800 shadow-[0_0_1rem_] shadow-[#2f365ea6] rounded-xl fixed z-50 top-3 right-[50%] translate-x-[50%]"
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;
