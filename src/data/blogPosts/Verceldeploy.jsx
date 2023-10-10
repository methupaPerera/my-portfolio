import { motion } from "framer-motion";
import { Code } from "../../components";
import { useEffect } from "react";

const codeJsx = (
    <code>
        {`{
  "version": 2,
  "builds": [
      {
          "src": "src/index.py", 
          "use": "@vercel/python"
      }
  ],
  "routes": [
      {
          "src": "/(.*)", 
          "dest": "src/index.py"
      }
  ]
}`}
    </code>
);

const Verceldeploy = () => {
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
                How to deploy a Flask app in Vercel ?
            </h1>
            <div className="flex flex-col gap-4">
                <p>
                    By this blog post, I'm gonna show you how to deploy a Vercel
                    App correctly in vercel. By default you can't just go and
                    import a flask app to vercel and deploy it. No worries !
                    I'll give you a step by step guide to do that so much
                    easier.
                </p>
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-400">
                        Steps
                    </h3>
                    <div className="flex flex-col gap-3">
                        <h4>1. Create a folder for your flask app.</h4>
                        <h4>
                            2. Next, create a folder named <code>src</code> in
                            that folder.
                        </h4>
                        <h4>
                            3. Then, create a file named <code>index.py</code>{" "}
                            in the <code>src</code> folder and build your flask
                            app in that file.
                        </h4>
                        <h4>
                            4. After that, go back to the root folder and create
                            a <code>requirements.txt</code> file and add <code>flask</code> to it which is very
                            important for every python project.&nbsp; (If you're
                            using git, you can use a <code>.gitignore</code>{" "}
                            file in the root folder as you wish.)
                        </h4>
                        <h4 className="mb-3">
                            5. Lastly and more importantly, create a{" "}
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

export default Verceldeploy;
