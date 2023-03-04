import { HiAcademicCap } from "react-icons/hi";
import { GrPersonalComputer} from "react-icons/gr";
import { MdGTranslate} from "react-icons/md";

export const projectExperience = [
  {
    name: "Full-Stack Certificate",
    place:"Axsos Academy",
    icon: GrPersonalComputer,
    
    bg: "#286F6C",
  },
  {
    name: "Bachelor's degree in English language and literature",
    place: "An-Najah University",
    icon:HiAcademicCap,
    bg: "#EEC048",
  },
  {
    name: "Translation Certificate",
    place: "Al Rateb center",
    icon: MdGTranslate,

    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am a Full-Stack developer graduate from AXSOS Academy which implements a German plateform called Coding Dojo.",
  "I have learned three full-stacks; Python, Java, and Mern.",
  "I am excellent in English as I studies English language and literature at An-Najah University and had some experience in translation. ",

];


export const comments = [
  {
    img: "./python.png",
  },
  {
    img: "./javaImage.png",
  },
  {
    img: "./react.png",
  },
  {
    img: "./css.png",
  },
  {
    img: "./html.png",
  },
  {
    img: "./bootstrap.png",
  },
  {
    img: "./sql.png",
  },
  {
    img: "./nodejs.png",
  },
  {
    img: "./javascript.png",
  },
  {
    img: "./mongo.png",
  },
  {
    img: "./expres.png",
  },
  {
    img: "./api.png",
  },
  {
    img: "./research.png",
  },
  {
    img: "./teamwork.png",
  },
  {
    img: "./trello.png",
  },
  {
    img: "./gitHub.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};