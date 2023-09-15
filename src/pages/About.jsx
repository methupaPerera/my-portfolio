import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="px-8 md:px-6 py-10 min-h-screen flex flex-col justify-center gap-10"
        >
            <h4 className="text-5xl font-bold text-slate-400">About</h4>
            <div className="flex flex-col gap-5 font-medium">
                <p>
                    I am a skilled <span className="text-slate-400 font-bold">Full Stack Developer</span> based in Sri Lanka,
                    passionate about creating captivating user experiences. With
                    the knwoledge in <span className="text-slate-400 font-bold">front-end and back-end</span> technologies, I
                    bring websites to life with seamless interactions.
                </p>
                <p>
                    I am a <span className="text-slate-400 font-bold">self-learner</span>,
                    constantly staying updated with the latest industry trends.
                    In my free time, I enjoy watching TV series and movies, and
                    I am a fan of{" "}
                    <span className="text-slate-400 font-bold">Quantum Physics</span>.
                </p>
                <p>
                    Let's <span className="text-slate-400 font-bold">collaborate</span> to
                    bring your vision to life and create a memorable website
                    experience.
                </p>
            </div>
        </div>
    );
};

export default About;
