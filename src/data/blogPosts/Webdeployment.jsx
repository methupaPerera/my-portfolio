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
            <div className="flex flex-col gap-6">
                <p>
                    Every new developer's first difficulty is to find a web
                    deployment site. From this blog post you'll know top 5 free
                    web deployment sites and their benefits as well.
                </p>
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold text-2xl mb-1">1. Vercel</h3>
                        <p>
                            Netlify is a web development platform that
                            simplifies website deployment, offers continuous
                            deployment workflows, improves scalability and
                            performance, provides serverless functions, and
                            integrates seamlessly with Git. It saves time by
                            automating the deployment process, enables faster
                            iteration with continuous deployment, improves
                            website performance with a global CDN, allows for
                            custom backend logic with serverless functions, and
                            facilitates effective collaboration with Git
                            integration.
                        </p>
                        <p className="mt-2">
                            Netlify's benefits include easy deployment,
                            continuous deployment workflows, scalability and
                            performance improvements, serverless functions, and
                            a Git-based workflow. These advantages make it a
                            popular choice for developers and businesses seeking
                            a streamlined web development process.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-1">2. Netlify</h3>
                        <p>
                            Netlify is a web development platform that
                            simplifies website building, deployment, and
                            management. It offers several benefits, including
                            easy deployment from Git repositories, continuous
                            deployment for automatic updates, scalability
                            through a global CDN, serverless functions for
                            dynamic applications, seamless integration with Git
                            workflows, and built-in analytics and A/B testing.
                        </p>
                        <p className="mt-2">
                            With Netlify, developers can quickly deploy
                            websites, collaborate effectively, and optimize user
                            experiences. It's a comprehensive platform that
                            streamlines web development processes and empowers
                            businesses to create and manage modern web
                            experiences efficiently.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-1">
                            3. Github Pages
                        </h3>
                        <p>
                            GitHub Pages is a free hosting service by GitHub
                            that allows users to host static websites directly
                            from their repositories. It offers several benefits,
                            including easy setup, version control integration,
                            custom domains, and continuous deployment.
                        </p>
                        <p className="mt-2">
                            With GitHub Pages, you can quickly set up and deploy
                            your website, track changes using Git, use your own
                            domain, and automatically update your site whenever
                            changes are made. It's a convenient and
                            cost-effective option for hosting static websites.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-1">4. Firebase</h3>
                        <p>
                            Firebase Hosting is a hosting service provided by
                            Google's Firebase platform. It offers several
                            benefits, including easy deployment, scalability,
                            free SSL certificates, continuous deployment, and
                            custom domain support.
                        </p>
                        <p>
                            With Firebase Hosting, you can quickly deploy your
                            web applications or static websites, ensure high
                            performance and scalability, secure connections with
                            SSL certificates, seamlessly integrate with other
                            Firebase services, and use your own domain name.
                            It's a reliable and convenient hosting solution for
                            developers and businesses.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-1">
                            5. 000webhost
                        </h3>
                        <p>
                            000webhost is a free web hosting service that offers
                            easy setup, a website builder tool, reliable
                            performance, and customer support. It's a great
                            option for individuals and small businesses looking
                            for a cost-effective way to host their websites.
                        </p>
                        <p className="mt-2">
                            With their free plan you can deploy your website
                            with a small water mark.
                        </p>
                    </div>
                </div>
                <p className="text-slate-400">
                    So, that's it for this blog post. Hope you enjoyed it. I'm
                    Methupa.
                </p>
            </div>
        </motion.div>
    );
};

export default Webdeployment;
