import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Louis Kirkham', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Aspiring dev folio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Louis',
  subtitle: 'I like breaking things on the web and occasionally fixing them',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilelouis.jpg',
  paragraphOne: 'I completed Makers Academy web development course in November 2020. It is an intensive course that packs in a huge amount of learning over 12 weeks, but most importantly teaches the foundations to write clean, maintainable code through core OOP principles and TDD. This focus also brings confidence to jump in to any new tech eager for the opportunity instead of being in fear of something new.',
  paragraphTwo: 'I was previously an accountant in practice for over 15 years and successful managed regular deadlines, communication with clients and government agencies and I enjoy working as part of a small team.',
  paragraphThree: 'Since finishing the bootcamp course I have been striving to keep improving, currently self learning React Native, and just coding out of enjoyment. I am hoping to find a junior developer job in which I can learn from more senior colleagues and to keep on top of best practices.',
  resume: 'https://resume.io/r/e8Vurceko', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
   {
    id: nanoid(),
    img: 'US_capitals.png',
    title: 'State Capitals',
    info: 'An exercise in learning typescript',
    info2: 'A interactive map using react-simple-maps and a public read-only Back4Apps database.',
    url: 'https://lucid-clarke-4db2b1.netlify.app/',
    repo: 'https://github.com/TheDancingClown/typescript_US_capitals', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'biogen.png',
    title: 'Biogen',
    info: 'A mobile version of a board game that simulates the creation of life ',
    info2: 'Ongoing project to improve learning in React Native - focusing on use of component extraction, props and hooks for state whilst avoiding the use of external any libraries.',
    url: 'https://expo.io/@pennywise/projects/biogen',
    repo: 'https://github.com/TheDancingClown/biogen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ingredients.png',
    title: 'Shopping List',
    info: 'An exercise to learn Redux Toolkit',
    info2: 'A React Native app that narrows down a list of recipes by ingredient, allows the user to add meals to a shopping list and produce a grocery list of combined items',
    url: 'https://expo.io/@pennywise/projects/ingredients',
    repo: 'https://github.com/TheDancingClown/shoppinglist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'swiftcalc.png',
    title: 'SwiftCalc',
    info: 'A React Native app to calculate either take home pay from an annual salary entered, or salary needed to achieve a monthly takehome. It calculates income tax and class 1 NI deductions for the 2019/20 and 2020/21 tax years.',
    info2: 'Built over 3 days to show quick learning in a completely new tech stack and programming language',
    url: 'https://thedancingclown.github.io/swiftcalc',
    repo: 'https://github.com/TheDancingClown/swiftcalc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1024.png',
    title: 'Signposts',
    info: 'Week 11 & 12 of Makers Academy. Final team project for graduation presentation day.',
    info2: 'Learning Swift and ARKit to produce an iOS mobile app for exploration and message sharing via augmented reality',
    repo: 'https://github.com/TheDancingClown/Signposts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'picaddo.png',
    title: 'Picaddo',
    info: 'A weekend challenge to rebuild Instagram',
    info2: 'Using rspec and factoryBot for TDD, learning Haml for an HTML alternative and learning Active Storage',
    repo: 'https://github.com/TheDancingClown/Pablo-Picaddo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'posts.png',
    title: 'FacemaskBook',
    info: 'Week 8 & 9 of Makers Academy. A team project learning a new framework',
    info2: 'A social media web app clone to learn Ruby on Rails',
    repo: 'https://github.com/TheDancingClown/Croc-My-World', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'louiskirkham@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/louis-kirkham-290b5764/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TheDancingClown',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
