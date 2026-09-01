import { FaAward } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

// End of aboutCards imports

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// End of contactOption imports

import { SiLeetcode } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

// End of Socials imports

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

// End of navLink imports

import {
    biakitchen,
    landingpage,
    techdoc,
    tribute,
    responsivebakery,
    portfolio,
    edusity,
    reactportfolio,
    quizapp,
    aiCrews,
    blessHomeopathy,
    goflixNow,
    gptProfessor,
    iamScientist,
    ieltsAgent,
    intelliwriter,
    sigmapublisher,
} from "./assets/images";

// End of portfolio imports

// End of imports

export const name = "Muhammad Abdullah"
export const role = "Full-Stack Engineer"

// End of header

export const aboutCards = [
    {
        id: 1,
        logo: <FaAward aria-hidden="true" />,
        heading: "Experience",
        description: "2+ years",
    },
    {
        id: 2,
        logo: <GoProjectSymlink aria-hidden="true" />,
        heading: "Projects",
        description: "20+",
    },
]

export const aboutInfo = `I’m a Full Stack Engineer with 2+ years of hands-on experience building responsive, scalable web applications. I work across frontend, backend, APIs, databases, and deployment, with a focus on clean code, performance, and intuitive user experiences.`

// End of About

export const contactOption = [
    {
        id: 1,
        logo: <MdOutlineEmail aria-hidden="true" />,
        option: "Email",
        info: "mabdullah.talk@gmail.com",
        address: "mailto:mabdullah.talk@gmail.com",
    },
    {
        id: 2,
        logo: <FaWhatsapp aria-hidden="true" />,
        option: "Whatsapp",
        info: "+92 331 559 0956",
        address: "https://api.whatsapp.com/send?phone=923315590956",
    },
]

// End of Contact

export const frontEnd = [
    {
        id: 1,
        language: "React.js",
        status: "Experienced",
    },
    {
        id: 2,
        language: "Next.js",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Angular",
        status: "Intermediate",
    },
    {
        id: 4,
        language: "Tailwind CSS",
        status: "Experienced",
    },
    {
        id: 5,
        language: "Bootstrap",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Material UI",
        status: "Experienced",
    },
];

export const languages = [
    {
        id: 1,
        language: "JavaScript",
        status: "Experienced",
    },
    {
        id: 2,
        language: "TypeScript",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Python",
        status: "Basic",
    },
];

export const backEnd = [
    {
        id: 1,
        language: "Node.js",
        status: "Experienced",
    },
    {
        id: 2,
        language: "Express.js",
        status: "Experienced",
    },
    {
        id: 3,
        language: "MongoDB",
        status: "Experienced",
    },
    {
        id: 4,
        language: "SQL",
        status: "Intermediate",
    },
];

export const versionControl = [
    {
        id: 1,
        language: "Git",
        status: "Experienced",
    },
    {
        id: 2,
        language: "GitHub",
        status: "Experienced",
    },
];

export const cms = [
    {
        id: 1,
        language: "WordPress",
        status: "Experienced",
    },
    {
        id: 2,
        language: "WooCommerce",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Headless WordPress",
        status: "Intermediate",
    },
    {
        id: 4,
        language: "CMS Integration",
        status: "Experienced",
    },
];

export const other = [
    {
        id: 1,
        language: "Prompt Engineering",
        status: "Experienced",
    },
    {
        id: 2,
        language: "AI Integration",
        status: "Intermediate",
    },
    {
        id: 3,
        language: "Generative AI",
        status: "Intermediate",
    },
    {
        id: 4,
        language: "Figma",
        status: "Intermediate",
    },
    {
        id: 5,
        language: "Canva",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Vercel",
        status: "Experienced",
    },
    {
        id: 7,
        language: "Clerk",
        status: "Intermediate",
    },
    {
        id: 8,
        language: "Vapi AI",
        status: "Intermediate",
    },
    {
        id: 9,
        language: "AWS Deployment",
        status: "Intermediate",
    },
];

// End of Experience

export const footerLink = [
    {
        id: 1,
        section: "Home",
    },
    {
        id: 2,
        section: "About",
    },
    {
        id: 3,
        section: "Experience",
    },
    {
        id: 4,
        section: "Services",
    },
    {
        id: 5,
        section: "Portfolio",
    },
    {
        id: 6,
        section: "Contact",
    },
]

// End of Footer

export const Socials = [
    {
        id: 1,
        link: "https://www.linkedin.com/in/Abdullah-Logic/",
        icon: <FiLinkedin aria-hidden="true" />,
        tooltip: "Linkedin",
    },
    {
        id: 2,
        link: "https://github.com/Abdullah-Logic",
        icon: <FaGithub aria-hidden="true" />,
        tooltip: "GitHub",
    },
    {
        id: 3,
        link: "https://leetcode.com/u/Abdullah-Logic/",
        icon: <SiLeetcode aria-hidden="true" />,
        tooltip: "LeetCode",
    },
    {
        id: 4,
        link: "https://wakatime.com/@Abdullah_Logic",
        icon: <SiWakatime aria-hidden="true" />,
        tooltip: "WakaTime",
    },
]

// End of Socials

export const navLink = [
    {
        id: 1,
        icon: <IoHomeOutline aria-hidden="true" />,
        section: "home",
        tooltip: "Home",
    },
    {
        id: 2,
        icon: <FaRegUser aria-hidden="true" />,
        section: "about",
        tooltip: "about",
    },
    {
        id: 3,
        icon: <BsBriefcase aria-hidden="true" />,
        section: "experience",
        tooltip: "experience",
    },
    {
        id: 4,
        icon: <LiaToolsSolid aria-hidden="true" />,
        section: "services",
        tooltip: "services",
    },
    {
        id: 5,
        icon: <IoExtensionPuzzleOutline aria-hidden="true" />,
        section: "portfolio",
        tooltip: "portfolio",
    },
    {
        id: 6,
        icon: <BiMessageDetail aria-hidden="true" />,
        section: "contact",
        tooltip: "contact",
    },
]

// End of NavLink

export const data = [
    {
        id: 1,
        image: intelliwriter,
        title: "IntelliWriter",
        desc: "AI-powered SEO platform with a responsive dashboard and optimized homepage, focused on performance and faster load times.",
        tech: "Next.js, TypeScript, Tailwind CSS, Material UI, D3.js, Stripe API",
        demo: "https://intelliwriter.io/"
    },
    {
        id: 2,
        image: sigmapublisher,
        title: "Sigma Publisher",
        desc: "Online bookstore platform supporting print books, ebooks, and Kindle format sales, integrated with AI, along with Stripe for payments.",
        tech: "Next.js, TypeScript, Tailwind CSS, Node.js, SQL, Ai integration, PDFLib, Stripe API",
        demo: "https://sigmapublisher.com/"
    },
    {
        id: 3,
        image: iamScientist,
        title: "I am Scientist",
        desc: "AI education platform enhanced with a registration system, new pages, UI improvements, testing, and issue resolution.",
        tech: "Next.js, TypeScript, Tailwind CSS, Framer Motion, Stripe API",
        demo: "https://iamscientist.ai/"
    },
    {
        id: 4,
        image: blessHomeopathy,
        title: "Bless Homeopathy",
        desc: "Homeopathic healthcare website featuring consultation booking and an online product store.",
        tech: "Next.js, TypeScript, Tailwind CSS, Cal.com",
        demo: "https://blesshomeopathy.com/"
    },
    {
        id: 5,
        image: goflixNow,
        title: "GoFlix-Now",
        desc: "Complete frontend for a movie and TV streaming platform with a responsive and performance-optimized interface.",
        tech: "Next.js, TypeScript, Tailwind CSS, HLS.js",
        demo: "https://goflixnow.com/"
    },
    {
        id: 6,
        image: ieltsAgent,
        title: "IELTS Agent",
        desc: "AI-powered IELTS and PTE mock test platform with instant band score prediction and AI-powered writing and speaking feedback.",
        tech: "Next.js, TypeScript, Tailwind CSS, Stripe API",
        demo: "https://ieltsagent.com/"
    },
    {
        id: 7,
        image: gptProfessor,
        title: "GPT Professor",
        desc: "AI research assistant featuring citation generation, literature reviews, topic discovery, PDF chat, and paper formatting.",
        tech: "Next.js, TypeScript, Tailwind CSS, Clerk, Express.js, PostgreSQL, Tesseract.js",
        demo: "https://gptprofessor.io/"
    },
    {
        id: 8,
        image: aiCrews,
        title: "AI Crews",
        desc: "Frontend for an AI agent platform featuring specialized agents for HR, Marketing, Sales, Legal, Accounting, Operations, and Security.",
        tech: "Next.js, TypeScript, Tailwind CSS",
        demo: "https://aicrews.io/"
    },
    {
        id: 9,
        image: reactportfolio,
        title: "React Portfolio",
        desc: "A fully functional, dynamic, and responsive portfolio developed to showcase a client's skills and achievements.",
        tech: "React.js, EmailJS, React-Icons, Swiper.js",
        github:
            "https://github.com/Abdullah-Logic/react-portfolio",
        demo: "https://abdullah-logic-portfolio.vercel.app/",
    },
    {
        id: 10,
        image: edusity,
        title: "Edusity Website",
        desc: "A practice project replicating the features and functionality of the Edusity website.",
        tech: "React.js, ReCaptcha, React-Icons",
        github:
            "https://github.com/Abdullah-Logic/edusity-website",
        demo: "https://edusity-website-pearl.vercel.app/",
    },
    {
        id: 11,
        image: quizapp,
        title: "Quiz Application",
        desc: "A full-stack MERN quiz application featuring dynamic question handling and interactive quiz functionality.",
        tech: "React.js, Node.js, Express.js, Redux, MongoDB, Axios",
        github:
            "https://github.com/Abdullah-Logic/quiz-app",
    },
    {
        id: 12,
        image: responsivebakery,
        title: "Virtual Bakery",
        desc: "A responsive bakery website created to showcase a client's products.",
        tech: "HTML, CSS, JavaScript",
        github:
            "https://github.com/Abdullah-Logic/bakery-responsive.git",
    },
    {
        id: 13,
        image: techdoc,
        title: "Technical Documentation Page",
        desc: "Technical documentation page presenting information about algorithms in a structured format.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/technical_doc_page",
    },
    {
        id: 14,
        image: biakitchen,
        title: "Bia's Baking Kitchen",
        desc: "Bakery website created to showcase products and services for an online bakery.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/bias-baking-kitchen.git",
        demo: "https://biasbakingkitchen.tiiny.site",
    },
    {
        id: 15,
        image: landingpage,
        title: "Product Landing Page",
        desc: "Responsive product landing page created to showcase newly launched products.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/landing_page",
    },
    {
        id: 16,
        image: tribute,
        title: "Tribute Page",
        desc: "Tribute page highlighting the lives, achievements, and impact of influential figures.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/tribute_page",
    },
    {
        id: 17,
        image: portfolio,
        title: "Simple Portfolio Page",
        desc: "A simple portfolio website created to showcase skills and projects.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/personal_port_page",
        demo: "https://mabdullah-portfolio.w3spaces.com",
    },
];

// End of Portfolio

export const design = [
    {
        id: 1,
        description: "Create user-centered interfaces with clear, intuitive, and responsive interactions.",
    },
    {
        id: 2,
        description: "Design layouts, mockups, and prototypes using Figma and Canva.",
    },
    {
        id: 3,
        description: "Apply typography, color, spacing, and visual hierarchy to create polished user experiences.",
    },
];

export const webDev = [
    {
        id: 1,
        description: "Build responsive and scalable web applications using React.js, Next.js, JavaScript, and TypeScript.",
    },
    {
        id: 2,
        description: "Develop full-stack solutions using Node.js, Express.js, MongoDB, SQL, and REST APIs.",
    },
    {
        id: 3,
        description: "Create reusable UI components and responsive layouts using Tailwind CSS, Bootstrap, and Material UI.",
    },
    {
        id: 4,
        description: "Integrate third-party services, APIs, authentication, and CMS platforms into web applications.",
    },
    {
        id: 5,
        description: "Manage projects with Git and GitHub and deploy applications using platforms such as Vercel and AWS.",
    },
];

export const contentCreation = [
    {
        id: 1,
        description: "Create polished visual assets, mockups, and presentations for digital projects.",
    },
    {
        id: 2,
        description: "Develop engaging graphics and promotional content using Canva and Figma.",
    },
    {
        id: 3,
        description: "Use AI tools and prompt engineering to enhance content creation and development workflows.",
    },
    {
        id: 4,
        description: "Combine technical and creative skills to deliver clear, engaging digital experiences.",
    },
];

// End of Services
