import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillBook, AiFillContainer, AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Education" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Experiences" },
];

export const services = [
  {
    title: "University of Washington",
    icon: <FaPaintBrush />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `September 2024 - present`,
  },
  {
    title: "Wake Forest University",
    icon: <FaCodeCompare />,
    description: `August 2022 - May 2024`,
  },
  {
    title: "Kaohsiung American School",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `August 2018 - May 2022`,
  },
];

export const projects = [
  {
    title: "AI-Powered Soccer Analytics System",
    image: project1,
    category: "Individual Project",
    description: `Self-initiated an AI-powered soccer analytics system using machine learning with PyTorch and OpenCV, achieving 96.2% accuracy in detecting players, referees, and soccer balls in real-time game scenarios. Fine-tuned a YOLOv8 model for precision tracking and applied KMeans clustering using Scikit-Learn to assign players to teams with 93.5% accuracy based on jersey colors. Leveraged computer vision techniques, including optical flow and perspective transformation, to analyze player movements and extract insights such as real-time speed, total distance covered, and camera tracking precision.
`,
    demoLink: "https://github.com/kchua220/AI-Powered-Soccer-Analytics-System",
    stacks: [
      {
        name: "Python",
        logo: xd,
      },
      {
        name: "PyTorch",
        logo: xd,
      },
      {
        name: "OpenCV",
        logo: xd,
      },
      {
        name: "Ultralytics YOLO",
        logo: xd,
      },
      {
        name: "Scikit-Learn",
        logo: xd,
      },
      
    ],
  },
  {
    title: "The Wheel of Taste",
    image: project2,
    category: "Individual Project",
    description: `Developed an advanced iOS app empowering indecisive users to discover meal ideas effortlessly. Allow users to set dietary preferences, cuisine types, and budgets, to explore meal suggestions through a dynamic spinning wheel. Integrated CoreML for real-time recommendation tuning, MapKit for nearby restaurant suggestions, and CoreData for user history. Built a polished interface with SwiftUI and Lottie animations for immersive visuals. Introduced a feature allowing users to access a map option seamlessly redirecting them to an external site, displaying nearby restaurants offering the selected cuisine.`,
    demoLink: "https://github.com/kchua220/The-Wheel-of-Taste",
    stacks: [
      {
        name: "Swift",
        logo: react,
      },
      {
        name: "SwiftUI",
        logo: xd,
      },
    ],
  },
  {
    title: "Music Recommendation System",
    image: project2,
    category: "Individual Project",
    description: `In Progress~~   Goal: To develop a Music Recommendation System using the Spotify dataset from Kaggle while leveraging data analysis and visualization. By analyzing user listening history and features like acousticness, danceability, energy, and valence, the system predicts tracks tailored to individual preferences. Implemented diverse machine learning algorithms for content-based recommendations, ensuring high precision and recall. Scalable to handle large datasets, the system continuously improves by learning from user interactions. Utilized data analysis and visualization tools to explore user behavior and song popularity, informing the recommendation engine and enhancing the user experience.`,
    demoLink: "",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Global Suicide Trends: Gender Disparities and Insights (INFO 201)",
    image: project4,
    category: "Group Project",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "",
    stacks: [
      
    ],
  },
  {
    title: "Global Pathways - OPT/CPT Made Easy (INFO 200)",
    image: project5,
    category: "Group Project",
    description: ``,
    demoLink: "",
    stacks: [
  
    ],
  },
  {
    title: "",
    image: project6,
    category: "",
    description: ``,
    demoLink: "",
    stacks: [
     
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "Libraries/FrameWorks/Tools",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];


export const socialHandles = [
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/kevinchuang220/",
  },

  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/kchua220",
  },
  
  {
    name: "Resume",
    icon: <AiFillContainer />,
    link: "",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "R.O.C Army",
    review: `Obligatory Military Service`,
  },
  {
    avatar: profile4,
    name: "E-Castle Robotics Center",
    review: `Teaching Assistant`,
  },
  {
    avatar: profile5,
    name: "Brogent Technology",
    review: `Software Engineer Intern`,
  },
  {
    avatar: profile6,
    name: "National Kaohsiung Center for the Arts",
    review: `Web Developer Intern`,
  },
];
