import { blogImages } from "../assets";

const [verceldeploy, webdeployment, frontendtools] = blogImages;

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
        text: "When I was a absolute beginner, I'm used to code everything manually. \
               But months later, I was wondering if there's pre-written code in the internet \
               to boost my workflow. Then I found some cool stuff after doing some researches and projects. \
               Now, I'm gonna share those with you !",
        date: dateHandler("2023-10-16"),
    },
];
