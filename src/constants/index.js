import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  twitter,
  yourlogo,
  facebook,
  telegram, 
  linkedin, 
  altium,
  autocad,
  c,
  cpp,
  css,
  django,
  expressjs,
  html,
  js,
  opencv,
  opengl,
  python,
  solidworks,
  tailwind,

  
} from "../assets";


export const socials = [
  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/nbqduong",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/nbqduong.01/",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/nbqduong/",
  },
];

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Contacts",
    url: "#contacts",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export default homeSmile;
export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const skills = [

  {
    id: "1",
    title: "Embedded Development",
    text: "About 3 years of experience making embedded products mainly in robots and industry fields with multiple languages and tools:",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    icons: [
      { src: cpp, alt: "cpp" },
      { src: c, alt: "c" },
      { src: opencv, alt: "opencv" },
      { src: solidworks, alt: "solidworks" },
      { src: autocad, alt: "autocad" },
      { src: altium, alt: "altium" },
 
    ],
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "0",
    title: "Software Development",
    text: "Although I spent lots of time making embedded products. I also have a great passion and some experience in developing software products with these tools and languages:",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    icons: [
      { src: cpp, alt: "cpp" },
      { src: css, alt: "css" },
      { src: html, alt: "html" },
      { src: js, alt: "js" },
      { src: opencv, alt: "opencv" },
      { src: opengl, alt: "opengl" },
      { src: python, alt: "python" },
      { src: tailwind, alt: "tailwind" },
      { src: django, alt: "django" },
      { src: expressjs, alt: "expressjs" },
    ],
    imageUrl: benefitImage2,
  },
  
];