import { FaPaintBrush } from "react-icons/fa";
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
  project7,
  project8,
  profile2,
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
  python,
  pytorch,
  opencv,
  yolo,
  sl,
  swift,
  swiftui,
  pandas,
  matplotlib,
  numpy,
  ploty,
  ggplot,
  r,
  notion,
  Cplusplus,
  Java,
  SQL,
  tensorflow,
  boost,
  nodejs,
  jQuery,
  aws,
  linux,
  git,
  basketball,
  volleyball,
  cooking,
  gaming,
  movie,
  music,
  coding,
  goat,
  wakeforest,
  columbia,
  kas,
  uw, 
  cardgenius,
  soccervisionAI,
  transitbuddy,
  gamebot
} from "./assets";
import { BiBasket } from "react-icons/bi";

export const menu = [
  { name: "About" },
  { name: "Education" },
  { name: "Project" },
  { name: "Experience" },
  { name: "Skill" },
];

export const services = [
  {
    title: "Columbia University",
    icon: columbia,
    color: "rgb(75, 150, 210)",
    colorRGB: "75, 150, 210",
    description: `January 2026 - May 2027`,
    description2: `M.S. Computer Science`,
    courses:`Courseworks `,
    course_list: [
      "Operating Systems",
      "Advanved System Programming",
      "Analysis of Algorithms"
    ]
  },
  {
    title: "University of Washington",
    icon: uw,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `September 2024 - December 2025`,
    description2:`B.S. Inforamtics & Data Science Minor `,
    courses:`Courseworks `,
    course_list: [
      "Data Structures & Algorithms", 
      "Database Systems", 
      "Artificial Intetlligence", 
      "Client/Server Side Development",
      "Data Programming",  
      "Databases and Data Modeling", 
      "Linear Algebra",
      "Diferential Equations"
  ]
  },
  {
    title: "Wake Forest University",
    icon: wakeforest,
    color: "rgb(218, 165, 32)",
    colorRGB: "218, 165, 32",
    description: `August 2022 - May 2024`,
    description2:`Computer Science (Transfered)`,
    courses:`Courseworks `,
    course_list: [
      "Computer Systems",
      "Foundementals of Computer Science", 
      "High Performace Computing", 
      "Discrete Mathematics", 
      "Engineering Computation Design",
      "Calculas I & II",  
      "Physics I & II", 
  ]
  },
  {
    title: "Kaohsiung American School",
    icon: kas,
    color: "rgb(220, 38, 38)",
    colorRGB: "220, 38, 38",
    description: `August 2018 - May 2022`,
    description2:`High School & IB Diploma `,
    courses:`Courseworks `,
    course_list: [
      "IB Mathematics A&I HL", 
      "IB Physics HL", 
      "IB English Lang & Lit HL", 
      "IB Economics SL",
      "IB Business Management SL",  
      "IB Spanish SL", 
      "Theory of Knowledge"
  ]
  },
];
export const hobbies = [
  {
    data: [
      {
        skill: "Basketabll",
        logo: basketball,
      },
      {
        skill: "Volleyball",
        logo: volleyball,
      },
      {
        skill: "Cooking",
        logo: cooking,
      },
      {
        skill: "Gaming",
        logo: gaming,
      },
      {
        skill: "Movie",
        logo: movie,
      },
      {
        skill: "Music",
        logo: music,
      },
      {
        skill: "Coing",
        logo: coding,
      },
      {
        skill: "Goat",
        logo: goat,
      },
    ],
  },
];

export const projects = [
  {
    title: "PromptCoach",
    image: project7,
    category: "Group Project",
    description: `Engineered a Chrome extension that delivers real-time feedback on AI prompts for 200+ beta users, analyzing tone and emotion to improve prompt effectiveness. Trained DistilBERT and Random Forest ensemble on 50,000+ labeled prompts, achieving 92% emotion classification accuracy, optimizing hyperparameters and deploying via Flask API with Express server handling <200ms response time. Collected user feedback through A/B testing, achieving 37% improvement in prompt quality'
`,
    demoLink: "https://github.com/kchua220/",
    stacks: [
      {
        name: "Python",
        logo: python,
      },
      {
        name: "PyTorch",
        logo: pytorch,
      },
      {
        name: "OpenCV",
        logo: opencv,
      },
      {
        name: "Ultralytics YOLO",
        logo: yolo,
      },
      {
        name: "Scikit-Learn",
        logo: sl,
      },
      
    ],
  },
  {
    title: "CardGenius",
    image: cardgenius,
    category: "Group Project",
    description: `Developed a mobile app recommending optimal credit card for maximum rewards based on merchant and spending category. Built rule-based algorithm analyzing 15+ card structures with rotating quarterly bonuses, integrated Plaid API for secure card linking and account verification, and created intuitive UI with real-time merchant lookup and cashback visualization. Demonstrated 1.8x average cashback improvement through intelligent card selection completed in DubHack hackathon'
`,
    demoLink: "https://github.com/kchua220/",
    stacks: [
      {
        name: "Python",
        logo: python,
      },
      {
        name: "PyTorch",
        logo: pytorch,
      },
      {
        name: "OpenCV",
        logo: opencv,
      },
      {
        name: "Ultralytics YOLO",
        logo: yolo,
      },
      {
        name: "Scikit-Learn",
        logo: sl,
      },
      
    ],
  },
  {
    title: "SoccerVision AI",
    image: soccervisionAI,
    category: "Individual Project",
    description: `Self-initiated an AI-powered soccer analytics system using machine learning with PyTorch and OpenCV, achieving 96.2% accuracy in detecting players, referees, and soccer balls in real-time game scenarios. Fine-tuned a YOLOv8 model for precision tracking and applied KMeans clustering using Scikit-Learn to assign players to teams with 93.5% accuracy based on jersey colors. Leveraged computer vision techniques, including optical flow and perspective transformation, to analyze player movements and extract insights such as real-time speed, total distance covered, and camera tracking precision.
`,
    demoLink: "https://github.com/kchua220/AI-Powered-Soccer-Analytics-System",
    stacks: [
      {
        name: "Python",
        logo: python,
      },
      {
        name: "PyTorch",
        logo: pytorch,
      },
      {
        name: "OpenCV",
        logo: opencv,
      },
      {
        name: "Ultralytics YOLO",
        logo: yolo,
      },
      {
        name: "Scikit-Learn",
        logo: sl,
      },
      
    ],
  },
  {
    title: "The Wheel of Taste",
    image: project2,
    category: "Individual Project",
    description: `Developed an advanced iOS app empowering indecisive users to discover meal ideas effortlessly. Allow users to set dietary preferences, cuisine types, and budgets, to explore meal suggestions through a dynamic spinning wheel. Integrated CoreML for real-time recommendation tuning, MapKit for nearby restaurant suggestions, and CoreData for user history. Built a polished interface with SwiftUI and Lottie animations for immersive visuals. Introduced a feature allowing users to access a map option seamlessly redirecting them to an external site, displaying nearby restaurants offering the selected cuisine.`,
    demoLink: "https://github.com/kchua220/The-Wheel-Of-Taste",
    stacks: [
      {
        name: "Swift",
        logo: swift,
      },
      {
        name: "SwiftUI",
        logo: swiftui,
      },
    ],
  },
  {
    title: "Transit Buddy System",
    image: transitbuddy,
    category: "Group Project",
    description: `This analysis explores global suicide trends through comprehensive data-driven insights, focusing on gender disparities, country-specific patterns, and socio-economic influences. Using datasets from the World Health Organization (WHO), statistical techniques and interactive visualizations were applied with tools such as R, ggplot2, dplyr, and Plotly. The findings highlight key factors shaping suicide rates and aim to support targeted mental health interventions, emphasizing the importance of data-driven strategies in policymaking.`,
    demoLink: "https://github.com/kchua220/",
    stacks: [ 
      {
      name: "R",
      logo: r,
    },
    {
      name: "Ploty",
      logo: ploty,
    },
    {
      name: "ggplot",
      logo: ggplot,
    },
    ],
  },
  {
    title: "K-Row GameBot",
    image: gamebot,
    category: "Individual Project",
    description: `Built a modern, responsive portfolio website using React.js, designed for developers and designers looking to showcase their work professionally. Implemented light and dark mode for an enhanced user experience and created interactive components to highlight skills, projects, and services. The site features smooth page transitions and a sleek, visually appealing layout, optimized for both desktop and mobile viewing. With a focus on user-friendly navigation and industry best practices, this portfolio is crafted to stand out in the tech world.`,
    demoLink: "https://github.com/kchua220",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
      {
      name: "React.js",
      logo: react,
    },
     
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    data: [
      {
        skill: "Python",
        logo: python,
      },
      {
        skill: "Java",
        logo: Java,
      },
      {
        skill: "C++",
        logo: Cplusplus,
      },
      {
        skill: "R",
        logo: r,
      },
      {
        skill: "SQL",
        logo: SQL,
      },
      {
        skill: "Swift",
        logo: swift,
      },
      {
        skill: "Javascript",
        logo: javascript,
      },
      {
        skill: "HTML",
        logo: html,
      },
      {
        skill: "CSS",
        logo: css,
      },
    ],
  },
  
  {
    title: "Libraries/FrameWorks/Tools",
    data: [
      {
        skill: "TensorFlow",
        logo: tensorflow,
      },
      {
        skill: "PyTorch",
        logo: pytorch,
      },
      {
        skill: "Numpy",
        logo: numpy,
      },
      {
        skill: "OpenCV",
        logo: opencv,
      },
      {
        skill: "Scikit-Learn",
        logo: sl,
      },
      {
        skill: "Matplotlib",
        logo: matplotlib,
      },
      {
        skill: "Utralytics Yolo",
        logo: yolo,
      },
      {
        skill: "Boost",
        logo: boost,
      },
      {
        skill: "Node.js",
        logo: nodejs,
      },
      {
        skill: "jQuery",
        logo: jQuery,
      },
      {
        skill: "SwiftUI",
        logo: swiftui,
      },
      {
        skill: "Git/Github",
        logo: git,
      },
      {
        skill: "AWS",
        logo: aws,
      },
      {
        skill: "Linux",
        logo: linux,
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
    avatar: profile2,
    name: "Amgen",
    review: `Software Engineer Intern`,
    description: `July 2025- September 2025`,
    location:`Taipei, Taiwan`
  },
  {
    avatar: profile5,
    name: "Synology",
    review: `Software Developer Intern`,
    description: `June 2024 - August 2024`,
    location:`New Taipei, Taiwan`
  },
  {
    avatar: profile3,
    name: "R.O.C Army",
    review: `Obligatory Military Service`,
    description: `May - August 2023 & 2024`,
    location:`Chiayi, Taiwan`
  },
  {
    avatar: profile4,
    name: "E-Castle Robotics",
    review: `Teaching Assistant`,
    description: `December - January 2023 & 2024`,
    location:`Kaohsiung, Taiwan`
  },
  {
    avatar: profile5,
    name: "Brogent Technology",
    review: `Software Engineer Intern `,
    description: `June 2022 - July 2022`,
    location:`Kaohsiung, Taiwan`
  },
  {
    avatar: profile2,
    name: "National Kaohsiung Center for the Arts",
    review: `Web Developer Intern`,
    description: `March 2021 - November 2021`,
    location:`Kaohsiung, Taiwan`
  },
  {
    avatar: profile6,
    name: "WFU Campus Recreation",
    review: `Intramural Referee `,
    description: `October 2022 - April 2024`,
    location:`Winston-Salem, NC`
  },
];
