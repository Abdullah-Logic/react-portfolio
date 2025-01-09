import { FaAward } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";

// End of aboutCards imports

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// End of contactOption imports

import { FiDribbble } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// End of headerSocials imports

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";

// End of navLink imports

import {
    biakitchen,
    landingpage,
    techdoc,
    tribute,
    responsivebakery,
    portfolio,
} from "./assets/image";

// End of portfolio imports

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

// End of footer imports

// End of imports

export const aboutCards = [
    {
        id: 1,
        logo: <FaAward />,
        heading: "Experience",
        description: "2+ years Studying",
    },
    {
        id: 2,
        logo: <LuUsers2 />,
        heading: "Clients",
        description: "None",
    },
    {
        id: 3,
        logo: <GoProjectSymlink />,
        heading: "Projects",
        description: "20+",
    },
]

// End of About

export const contactOption = [
    {
        id: 1,
        logo: <MdOutlineEmail />,
        option: "Email",
        info: "abdullah.dev1@gmail.com",
        address: "mailto:abdullah.dev1@gmail.com",
    },
    {
        id: 2,
        logo: <FaWhatsapp />,
        option: "Whatsapp",
        info: "+92 331 559 0956",
        address: "https://api.whatsapp.com/send?phone=923315590956",
    },
]

// End of Contact

export const frontEnd = [
    {
        id: 1,
        language: "HTML",
        status: "Experienced",
    },
    {
        id: 2,
        language: "CSS",
        status: "Experienced",
    },
    {
        id: 3,
        language: "JavaScript",
        status: "Experienced",
    },
    {
        id: 4,
        language: "TypeScript",
        status: "Intermediate",
    },
    {
        id: 5,
        language: "React",
        status: "Intermediate",
    },
    {
        id: 6,
        language: "Next.js",
        status: "Intermediate",
    },
]

export const backEnd = [
    {
        id: 1,
        language: "Python",
        status: "Basic",
    },
    {
        id: 2,
        language: "C",
        status: "Basic",
    },
]

export const tools = [
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
    {
        id: 3,
        language: "Figma",
        status: "intermediate",
    },
    {
        id: 4,
        language: "Vercel",
        status: "intermediate",
    },
]

export const other = [
    {
        id: 1,
        language: "Prompt Engineering",
        status: "Experienced",
    },
]

// End of Experience

export const footerLink = [
    {
        id: 1,
        section: "Header",
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

export const footerSocials = [
    {
        id: 1,
        link: "https://www.facebook.com/profile.php?id=100075356611389",
        icon: <FaFacebookF />,
    },
    {
        id: 1,
        link: "https://www.instagram.com/a_b_d_u_l_l_a_h_._k_h_a_n/",
        icon: <FaInstagram />,
    },
]

// End of Footer

export const headerSocials = [
    {
        id: 1,
        link: "https://www.linkedin.com/in/muhammad-abdullah-a38b41306/",
        icon: <FiLinkedin />,
    },
    {
        id: 2,
        link: "https://github.com/Abdullah-dev1",
        icon: <FaGithub />,
    },
    {
        id: 3,
        link: "https://dribbble.com/Abdullah-dev08",
        icon: <FiDribbble />,
    },
]

// End of HeaderSocials

export const navLink = [
    {
        id: 1,
        icon: <IoHomeOutline />,
        section: "header",
    },
    {
        id: 2,
        icon: <FaRegUser />,
        section: "about",
    },
    {
        id: 3,
        icon: <BsBriefcase />,
        section: "experience",
    },
    {
        id: 4,
        icon: <LiaToolsSolid />,
        section: "services",
    },
    {
        id: 5,
        icon: <BiMessageDetail />,
        section: "contact",
    },
]

// End of NavLink

export const data = [
    {
        id: 1,
        image: biakitchen,
        title: "Bia's Baking Kitchen",
        github: "https://github.com/Abdullah-dev1/bias-baking-kitchen.git",
    },
    {
        id: 2,
        image: responsivebakery,
        title: "Virtual Bakery",
        github: "https://github.com/Abdullah-dev1/bakery-responsive.git",
    },
    {
        id: 3,
        image: landingpage,
        title: "Product Landing Page",
        github:
            "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/landing_page",
    },
    {
        id: 4,
        image: techdoc,
        title: "Technical Documentation Page",
        github:
            "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/technical_doc_page",
    },
    {
        id: 5,
        image: tribute,
        title: "Tribute Page",
        github:
            "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/tribute_page",
    },
    {
        id: 6,
        image: portfolio,
        title: "Simple Portfolio Page",
        github:
            "https://github.com/Abdullah-dev1/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/personal_port_page",
    },
];

// End of Portfolio

export const design = [
    {
        id: 1,
        description: "Create user-centered designs that focus on clear, intuitive interactions.",
    },
    {
        id: 2,
        description: "Use basic editing skills to enhance design presentations.",
    },
    {
        id: 3,
        description: "Experiment with color schemes, typography, and layouts to align with brand identity.",
    },
];

export const webDev = [
    {
        id: 1,
        description: " Build responsive and interactive pages using HTML, CSS, and JavaScript with advanced proficiency.",
    },
    {
        id: 2,
        description: "Utilize React at an intermediate level to create reusable, dynamic UI components.",
    },
    {
        id: 3,
        description: "Implement responsive design techniques for optimal viewing on all device types.",
    },
    {
        id: 4,
        description: "Apply version control practices with Git to track and manage project changes.",
    },
    {
        id: 5,
        description: "Use foundational Python and C skills to support logic development and simple automation tasks.",
    },
];

export const contentCreation = [
    {
        id: 1,
        description: "Design mockups and prototypes to showcase ideas and enhance communication with stakeholders.",
    },
    {
        id: 2,
        description: "Produce visually appealing image-based content for various digital platforms.",
    },
    {
        id: 3,
        description: "Create simple video content to support marketing or instructional objectives.",
    },
    {
        id: 4,
        description: "Bring a creative approach to each project, crafting content that resonates with target audiences.",
    },
];

// End of Services