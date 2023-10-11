import { useEffect } from "react";
import { motion } from "framer-motion";

const Webdeployment = () => {
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
                Top 5 free deployment sites !
            </h1>
            <div className="flex flex-col gap-4">
                <p>
                    Every new developer's first difficulty is to find a web
                    deployment site. \ From this blog post you'll know top 5
                    free web deployment sites.
                </p>
            </div>
        </motion.div>
    );
};

export default Webdeployment;
