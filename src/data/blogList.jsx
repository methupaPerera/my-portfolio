import { blogImages } from "../assets";

const [
    verceldeploy,
    webdeployment,
    frontendtools,
    frontendintro,
    backenddeploy,
] = blogImages;

const dateHandler = (dates) => {
    const date = new Date(dates);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
};

export const blogList = [
    {
        id: 1,
        heading: "How to deploy a Flask app in Vercel ?",
        image: verceldeploy,
        text: "By this blog post, I'm gonna show you how to deploy a \
               Vercel App correctly in vercel. By default you can't just go and import \
               a flask app to vercel and deploy it",
        date: dateHandler("2023-10-10"),
    },
    {
        id: 2,
        heading: "Top 5 free deployment sites !",
        image: webdeployment,
        text: "Every new developer's first difficulty is to find a web deployment site. \
               From this blog post you'll know top 5 free web deployment sites",
        date: dateHandler("2023-10-12"),
    },
    {
        id: 3,
        heading: "Frontend tools, which will make your life easier !",
        image: frontendtools,
        text: "When I was an absolute beginner, I used to code everything manually. \
               But months later, I started wondering if there was pre-written code \
               available on the internet to boost my workflow",
        date: dateHandler("2023-10-16"),
    },
    {
        id: 4,
        heading: "Introduction to Frontend Development.",
        image: frontendintro,
        text: "As I've been involved in coding for a while, I'd like to \
               provide an introduction to this subject for newcomers. And I'm also going \
               to give some pieces of advice for you",
        date: dateHandler("2023-10-26"),
    },
    {
        id: 5,
        heading: "Deploy your backend app for free !",
        image: backenddeploy,
        text: "Over the last few days, I've been exploring ways to deploy a backend application \
        for development purposes. That's when I came across 'Vercel Serverless Functions.",
        date: dateHandler("2023-11-13"),
    },
].reverse();
