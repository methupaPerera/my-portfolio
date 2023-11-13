import { motion } from "framer-motion";
import { Code } from "../../components";
import { useEffect } from "react";

const codeJsx = (
    <code>
        {`{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "index.js"
        }
    ]
}`}
    </code>
);

const Backenddeploy = () => {
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
                Deploy your backend app for free !
            </h1>
            <div className="flex flex-col gap-4">
                <p>
                    Over the last few days, I've been exploring ways to deploy a
                    backend application for development purposes. That's when I
                    came across 'Vercel Serverless Functions. It's a completely
                    free platform for deploying your backend apps, especially
                    Node.js apps. From this blog post I'm gonna show you how to
                    do it.
                </p>
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-400">
                        Steps
                    </h3>
                    <div className="flex flex-col gap-3">
                        <h4>1. Create a folder for your node app.</h4>
                        <h4>
                            2. Next, build your node app normally.
                        </h4>
                        <h4 className="mb-3">
                            3. Lastly and more importantly, create a{" "}
                            <code>vercel.json</code> file in your root folder to
                            configure your vercel project and add the following
                            content in that.
                        </h4>
                        <Code>{codeJsx}</Code>
                    </div>
                </div>
                <p>
                    Ok, all the work has done. Now, all you have do is just
                    deploying your flask app in vercel by importing your git
                    repository to it.
                </p>
                <p className="text-slate-400">
                    Hope you enjoyed this blog post. Thank you for reading. I'm
                    Methupa !
                </p>
            </div>
        </motion.div>
    );
};

export default Backenddeploy;
