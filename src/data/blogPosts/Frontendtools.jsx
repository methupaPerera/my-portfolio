import { useEffect } from "react";
import { motion } from "framer-motion";

const Frontendtools = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
        >
            <h1 className="text-3xl font-bold">
                Frontend tools, which will make your life easier !
            </h1>
        </motion.div>
    );
};

export default Frontendtools;
