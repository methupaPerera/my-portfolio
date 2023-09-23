import React from "react";
import { motion } from "framer-motion";

const Work = ({
    heading,
    image,
    text,
    link,
    technologies,
    languages,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 150 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: index / 10 }}
            className="grid-cols-1 text-[0.8rem] bg-slate-700 p-4 justify-center rounded-xl bg-opacity-25 border-[1.5px] border-[#ffffff15] backdrop-blur-lg z-20"
        >
            <h3 className="text-xl font-medium">{heading}</h3>
            <div className="md:flex gap-2">
                <img src={image} className="mt-3 md:w-1/2 rounded-lg" />
                <p className="mt-3 text-[1rem] text-slate-400">{text}</p>
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p>Link - <a href={link} target="_blank" className="text-slate-400 hover:text-white duration-200 underline">{link.slice(0, 25)}...</a></p>
                <div className="mt-3 flex items-center gap-2">
                    {technologies
                        ? technologies.map((tech) => {
                              return (
                                  <p
                                      key={tech}
                                      className="bg-slate-700 px-2 py-[2px] rounded-full"
                                  >
                                      {tech}
                                  </p>
                              );
                          })
                        : ""}
                </div>
                <div className="flex items-center gap-2">
                    {languages.map((lang) => {
                        return (
                            <p
                                key={lang}
                                className="bg-slate-700 px-2 py-[2px] rounded-full"
                            >
                                {lang}
                            </p>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
