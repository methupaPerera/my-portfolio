import { blogImages } from "../assets";

const [verceldeploy, webdeployment] = blogImages;

const dateHandler = (date) => {
    return new Date(date)
        .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replace(/\//g, "-");
};

export const blogList = [
    {
        id: 1,
        heading: "How to deploy a Flask app in Vercel ?",
        image: verceldeploy,
        text: "By this blog post, I'm gonna show you how to deploy a \
               Vercel App correctly in vercel. By default you can't just go and import \
               a flask app to vercel and deploy it",
        date: dateHandler("10-10-2023"),
    },
    {
        id: 2,
        heading: "Top 5 free deployment sites !",
        image: webdeployment,
        text: "Every new developer's first difficulty is to find a web deployment site. \
               From this blog post you'll know top 5 free web deployment sites",
        date: dateHandler("12-10-2023"),
    },
];
