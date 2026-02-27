import { BookObject, DataModel, DataProjectModel, ResumeObject, SocialObject } from "./types";

export const fullName = "Emanuele Dall'Ara";
export const email = "emanuele.dallara99@gmail.com";
export const role = "Software Engineer";
export const birthday = "Oct 4, 1999";
export const location = "Cesena, Emilia-Romagna, ITA";
export const description =
  "As a Software Engineer, my passion lies in crafting high-performance projects that transform complex challenges into simple, elegant, and intuitive solutions 🎨. I am committed to staying at the forefront of industry trends, ensuring the delivery of superior, user-friendly products 🚀.";
export const descriptionDetails = `I'm eager to collaborate and bring extraordinary ideas to life. 
\nLet's create something remarkable together🤟🌍!`;

const imagesLogo = {
  githubAction: "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
  bun: "https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png",
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  vite: "https://vitejs.dev/logo-with-shadow.png",
  vitest: "https://vitest.dev/logo.svg",
  java: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  scala: "https://cdn-icons-png.flaticon.com/512/6132/6132220.png",
  socket:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png",
  android:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png",
  jest: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png",
  python:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  sonarCloud: "https://seeklogo.com/images/S/sonarcloud-logo-39208B5388-seeklogo.com.png",
};

export const navbarItems = ["About", "Resume", "Projects", "Bookshelf"];

export const serviceItems = [
  {
    image: "./assets/icon-dev.svg",
    title: "Software development",
    text: "Creating modern, high-quality solutions with a professional touch and a user-centric approach",
  },
  {
    image: "./assets/icon-mobile.svg",
    title: "Mobile App Developer",
    text: "Transforming ideas into polished mobile applications for iOS and Android",
  },
  {
    image: "./assets/icon-design.svg",
    title: "UI/UX Designer",
    text: "Crafting intuitive and visually appealing user interfaces for seamless user experiences",
  },
  {
    image: "./assets/icon-ci.svg",
    title: "DevOps",
    text: "Implementing CI/CD pipelines to automate the development and deployment process",
  },
];

export const technologiesItems: Array<DataModel> = [
  {
    image: imagesLogo.react,
    title: "React/React Native",
    description:
      "I've leveraged the power of React and React Native to build dynamic and responsive web applications and mobile experiences. With React's component-based architecture, I crafted efficient and reusable UI components that ensured a smooth user interface across various devices and screen sizes. Whether it's developing feature-rich web applications or creating immersive mobile apps for both iOS and Android, I pride myself on delivering top-notch solutions that blend the best of modern technology and user-centric design.",
  },
  {
    image: imagesLogo.vite,
    title: "Vite",
    description:
      "Taken web development to the next level, delivering blazing-fast and highly performant applications. By harnessing Vite's lightning-fast build system, I've optimized the development workflow, reducing build times significantly. This allowed me to focus on crafting efficient, modern, and feature-rich web applications without compromising on speed or user experience. Embracing Vite's simplicity and versatility, I've successfully built projects that showcase the true potential of cutting-edge web technologies, providing seamless user interactions and a delightful browsing experience.",
  },
  {
    image: imagesLogo.vitest,
    title: "Vitest",
    description:
      "Elevated the quality and reliability of my JavaScript and React Vite projects. As a powerful testing framework, Vitest has allowed me to write comprehensive test suites, ensuring that my code functions as expected and remains resilient to changes. By employing Vitest snapshot testing, I've effortlessly detected regressions and maintained code consistency across iterations. Whether writing unit tests, integration tests, or UI component tests, Vitest has been an invaluable tool in my toolkit, helping me deliver robust and bug-free applications.",
  },
  {
    image: imagesLogo.java,
    title: "Java",
    description:
      "I've crafted robust and scalable applications that stand the test of time. Leveraging the language's versatility, I've developed a wide range of projects, from desktop applications to server-side systems. Java's object-oriented nature allowed me to create well-structured and maintainable codebases, ensuring ease of collaboration with other developers. Through Java's vast ecosystem of libraries and frameworks, I've implemented complex functionalities with efficiency and reliability. From enterprise solutions to small-scale projects, my Java expertise has driven the development of powerful software that addresses diverse business needs.",
  },
  {
    image: imagesLogo.scala,
    title: "Scala",
    description:
      "I've embraced the power of functional programming and object-oriented paradigms to build elegant and scalable applications. Scala's expressive syntax and strong type system allowed me to write concise and readable code, facilitating rapid development without sacrificing safety. Leveraging its seamless integration with Java, I've harnessed existing Java libraries and ecosystems while enjoying the benefits of functional programming offered by Scala. From building high-performance backend services to creating data-intensive applications, Scala has been my language of choice for crafting innovative solutions that push the boundaries of modern software development.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    title: "Python",
    description:
      "I've harnessed the immense potential of machine learning, driving data-driven insights and predictive capabilities. Leveraging popular libraries such as TensorFlow and Scikit-learn, I've developed cutting-edge machine learning models for various applications, from image recognition to natural language processing. Python's versatility and extensive libraries have also enabled me to automate operational tasks, streamlining processes and improving overall efficiency. Moreover, I've utilized Python for forecasting and data analysis, empowering businesses with valuable foresight and informed decision-making. As a Python enthusiast, I've leveraged its capabilities to create innovative solutions that optimize workflows, extract meaningful patterns from data, and make businesses future-ready.",
  },
  {
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
    title: "MongoDB",
    description:
      "I've harnessed the power of MongoDB to build scalable and high-performance databases that drive modern applications. By leveraging MongoDB's flexible document-based data model, I've designed efficient and responsive databases that adapt to evolving application requirements. With MongoDB's distributed architecture and horizontal scaling capabilities, I've ensured that applications can handle large volumes of data and user requests with ease. Additionally, I've utilized MongoDB's aggregation framework and indexing features to optimize query performance and enhance data retrieval speed. With MongoDB, I've developed robust and reliable databases that underpin modern applications, providing seamless data storage and retrieval functionalities.",
  },
  {
    image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
    title: "Firebase",
    description:
      "I've leveraged Firebase's powerful suite of tools to build real-time applications with seamless user experiences. By integrating Firebase's authentication services, I've implemented secure user authentication and authorization mechanisms, ensuring data privacy and user trust. Leveraging Firebase's real-time database and cloud functions, I've developed responsive and dynamic applications that update in real-time, providing users with up-to-date information and interactive experiences. Additionally, I've utilized Firebase's hosting and storage services to deploy web applications and store media assets, ensuring scalability and reliability. With Firebase, I've created modern and engaging applications that deliver exceptional user experiences and drive user engagement.",
  },
  {
    image: imagesLogo.sonarCloud,
    title: "SonarCloud/SonaQube",
    description:
      "I've implemented SonarCloud and SonarQube to ensure code quality and maintainability in my projects. By integrating these tools into the development workflow, I've performed continuous code analysis, identifying bugs, vulnerabilities, and code smells early in the development process. Leveraging SonarCloud's cloud-based platform and SonarQube's on-premises solution, I've monitored code quality metrics, tracked technical debt, and enforced coding standards across projects. Through automated code reviews and quality gates, I've maintained high-quality codebases, reduced technical debt, and improved overall code maintainability. With SonarCloud and SonarQube, I've established a culture of code quality and reliability, ensuring that my projects meet the highest standards of software development.",
  },
];

export const socialListIcons: Array<SocialObject> = [
  {
    url: "https://www.linkedin.com/in/emanuele-dall-ara-40b3311a7/",
    icon: "linkedin-fill",
  },
  {
    url: "https://github.com/LeleDallas",
    icon: "github",
  },
  {
    url: "https://leetcode.com/LeleDallas/",
    icon: "leetcode",
  },
  {
    url: "https://stackoverflow.com/users/20091055/dallas",
    icon: "stackoverflow",
  },
];

export const bookList: Array<BookObject> = [
  {
    title: "So good they can't ignore you",
    description:
      "So Good They Can’t Ignore You sheds some much needed light on the “follow your passion” myth and shows you that the true path to work you love lies in becoming a craftsman of the work you already have, collecting rare skills and taking control of your hours in the process.",
    category: "Personal Growth",
    author: "Cal Newport",
    image: "./assets/calNewport.png",
    link: "https://www.zenflowchart.com/blog/so-good-they-cant-ignore-you-cal-newport-book-summary#:~:text=How%20do%20you%20find%20a,build%20and%20maintain%20job%20satisfaction.",
  },
  {
    title:
      "The seven spiritual laws of success: a practical guide to the fulfillment of your dreams",
    description:
      "Inspired in Hinduist and spiritualistic concepts, which preaches the idea that personal success is not the outcome of hard work, precise plans or a driving ambition, but rather of understanding our basic nature as human beings and how to follow the laws of nature. ",
    category: "Personal Growth",
    author: "Deepak Chopra",
    image: "./assets/7laws.png",
    link: "https://en.wikipedia.org/wiki/The_Seven_Spiritual_Laws_of_Success",
  },
  {
    title:
      "The Energy Codes: The 7-Step System to Awaken Your Spirit, Heal Your Body, and Live Your Best Life",
    description:
      "Transform your life with this revolutionary and accessible seven-step guide—grounded in energy medicine, neurobiology, and quantum physics—to awaken your true health and potential through energy healing.",
    category: "Personal Growth",
    author: "Sue Morter",
    image: "./assets/energy.png",
    link: "https://waiyancan.com/summary-the-energy-codes-by-sue-morter/",
  },
  {
    title: "Hustle Harder, Hustle Smarter",
    description:
      "For the first time, Curtis “50 Cent” Jackson opens up about his amazing comeback—from tragic personal loss to thriving businessman and cable's highest-paid executive—in this unique self-help guide, his first since his blockbuster New York Times bestseller The 50th Law.",
    category: "Autobiography",
    author: "Curtis '50 Cent' Jackson",
    image: "./assets/hhhs.png",
    link: "https://www.redital.com/2020/50-cent-opens-up-in-hustle-harder-hustle-smarter-book-review/#:~:text=Hustle%20Harder%2C%20Hustle%20Smarter%20is%20centered%20around%209%20themes%2C%20each,Ls%20and%20The%20Entitlement%20Trap.",
  },
  {
    title: "Decoded",
    description:
      "Decoded is the autobiography and memoir of rapper Jay-Z, published by Random House and released November 16, 2010 on hardcover and November 1, 2011 on paperback. The book combines lyrics, their explanations, anecdotes, reflections, and autobiographical information.",
    category: "Autobiography",
    author: "Jay-Z",
    image: "./assets/decoded.png",
    link: "https://en.wikipedia.org/wiki/Decoded_(memoir)",
  },
  {
    title: "The Marathon Don't Stop: The Life and Times of Nipsey Hussle",
    description: `This “beautiful tribute to a legendary artist” (Quincy Jones) is the first in-depth biography of Nipsey Hussle, the hip-hop mogul, artist, and activist whose transformative legacy inspired a generation with his motivational lyrics and visionary business savvy—before he was tragically shot down in the very neighborhood he was dedicated to building up.
        For Nipsey Hussle, “The Marathon” was more than a mixtape title or the name of a clothing store; it was a way of life, a metaphor for the relentless pursuit of excellence and the willpower required to overcome adversity day after day. Hussle was determined to win the race to success on his own terms, and he wanted to see his whole community in the winner’s circle with him.
        A moving and powerful exploration of an extraordinary artist, The Marathon Don’t Stop places Hussle in historical context and unpacks his complex legacy. Combining on-the-ground reporting and candid interviews, “Rob Kenner has given us the book the world—and hip-hop and pop culture—has been waiting for…one that should be celebrated alongside the best biographies ever about iconic figures we have loved—and lost” (Kevin Powell, author of When We Free the World).`,
    category: "Biography",
    author: "Rob Kenner",
    image: "./assets/nip.png",
    link: "https://www.simonandschuster.com/books/The-Marathon-Dont-Stop/Rob-Kenner/9781982140304#:~:text=In%20The%20Marathon%20Don't,this%20planet%20all%20too%20soon.%E2%80%9D",
  },
  {
    title: "The 48 Laws of Power",
    description: `The 48 Laws of Power is a candid and controversial examination of power and its many dynamics. If you want to understand people and ascend in the world, this book is a good starting place.
        You’ll learn about the nature of power, how to acquire it, and the dark ways in which people operate in the world. And in doing so, you’ll understand how to leverage power to get what you want, ideally using that knowledge to better the world.`,
    category: "Personal Growth",
    author: "Robert Greene",
    image: "./assets/power.png",
    link: "https://www.oberlo.com/blog/48-laws-of-power-robert-greene-summary",
  },
  {
    title: "Becoming Supernatural",
    description:
      "Becoming Supernatural marries some of the most profound scientific information with ancient wisdom to show how people like you and me can experience a more mystical life. Readers will learn that we are, quite literally supernatural by nature if given the proper knowledge and instruction, and when we learn how to apply that information through various meditations, we should experience a greater expression of our creative abilities; that we have the capacity to tune in to frequencies beyond our material world and receive more orderly coherent streams of consciousness and energy; that we can intentionally change our brain chemistry to initiate profoundly mystical transcendental experiences; and how, if we do this enough times, we can develop the skill of creating a more efficient, balanced, healthy body, a more unlimited mind, and greater access to the realms of spiritual truth.",
    category: "Personal Growth",
    author: "Dr. Joe Dispenza",
    image: "./assets/supernatural.png",
    link: "https://www.allencheng.com/becoming-supernatural-book-summary-dr-joe-dispenza/",
  },
];

export const resumeItem: Array<ResumeObject> = [
  {
    description: "Alma Mater Studiorum, University of Bologna",
    title: "Master in Computer Science and Engineering",
    time: "2021 - 2023",
  },
  {
    description: "Alma Mater Studiorum, University of Bologna",
    title: "Bachelor in Computer Science and Engineering",
    time: "2018 - 2021",
  },
  {
    description: "ITT Blaise Pascal, Cesena",
    title: "Technical Technological Diploma",
    time: "2013 - 2018",
  },
];

export const experiencesItem: Array<ResumeObject> = [
  {
    description: `As a Mobile Software Engineer at PagoPA, I contribute to the evolution of the IO app by helping design and implement core functionalities that enable millions of citizens to access public services reliably and securely. 
        I work across the full mobile ecosystem (React Native, native iOS/Android modules, performance and accessibility improvements, CI automation and Design System integration) supporting the delivery of robust, scalable and compliant features.
        Within the Bonus & Payments (B&P) stream, I help develop end-to-end service flows for national initiatives such as Bonus Elettrodomestici, Carta della Cultura and Carta Giovani Nazionale, 
        collaborating closely with product, design and platform teams to ensure consistency, reliability and a seamless user experience. I also contribute to the payment side of the stream by supporting the integration and refinement of wallet and transaction features, improving navigation, error handling and state management to ensure stable and predictable payment flows across the app.
        Throughout my tenure, I’ve contributed to multiple service integrations used nationwide, participated in architectural improvements that addressed long-standing technical issues, and supported accessibility upgrades across domains. 
        My role focuses on strengthening the quality, maintainability and overall user experience of one of Italy’s most widely used public-service applications.`,
    title: "PagoPA S.p.A",
    time: "Oct 2023 - Now",
  },
  {
    description: `Design, develop, test and deploy design features in a timely manner maintaining brand consistency throughout the design process.
        Spearheaded the migration of our project from Create React App (CRA) to Vite, which led to significant performance enhancements and expedited build times.       
        Introduced clean code practices and principles to bolster code quality and maintainability. 
        Implement unit tests with Vitest to ensure the reliability and robustness of the codebase.
        Setup CI/CD pipelines with BitBucket to automate the build and deployment process with an automated versioning and changelog generation, which streamlined the release process and enhanced project documentation.
        Implemented SonarQube for continuous inspection of code quality, managing code security, bugs, and technical debt. This led to improved code maintainability and reliability.
        Led the creation of a centralized Storybook project, optimizing component documentation and streamlining collaboration. Significantly improved design workflows and resource management for enhanced productivity.
        Implemented WebSockets with SignalR for real-time notifications, enhancing user experience and engagement.
        In collaboration with the team, I ensured the on-time delivery of features and updates.`,
    title: "Software Engineer at myDev S.R.L",
    time: "Dec 2023 - Oct 2023",
  },
  {
    description: `Engaged in full-cycle software development at a technology startup in the energy sector, from requirements definition to deployment. 
        I participated in both frontend and backend development for the DERNetSoft application using React, React Native, TypeScript, and the MERN stack. 
        Crafted secure microservices APIs with standard authentication, compression, and rate limiting. 
        Developed data connectors for seamless integration with our time-series data store, managing diverse data sources. 
        Automated company processes and managed GitHub, implementing task automation and DevOps practices. 
        Led the development of the frontend, mobile, and component library to ensure intuitive interfaces and streamlined processes.`,
    title: "Software Engineer at DERNetSoft",
    time: "Nov 2020 - Oct 2023",
  },
  {
    title: "Internship IoT Developer at FabLabRomagna",
    description: `Designing and creating a web radio using Volumio software, a Raspberry PI board, and a 3D printed case manufactured with AutoCAD, providing a customized and interactive radio experience.`,
    time: "Feb 2018 - Mar 2018",
  },
  {
    title: "Internship as Web Developer at QUEEN S.R.L",
    description: `Create and manage websites efficiently using the Joomla content management system, enabling seamless content updates and website administration.`,
    time: "Feb 2017 - Mar 2017",
  },
  {
    description: `Conducting comprehensive tests to identify and document software bugs, ensuring the website's optimal performance and user experience.`,
    title: "Internship as Application debugger at Flatme Networks srls",
    time: "Feb 2016 - Mar 2016",
  },
];

export const projects: Array<DataProjectModel> = [
  {
    title: "io-app",
    image: "https://raw.githubusercontent.com/pagopa/io-app/refs/heads/master/img/io-app-icon.png",
    type: "Mobile Application",
    url: "https://github.com/pagopa/io-app",
    description: "IO - The public services app. The mobile app of the Digital Citizenship project",
    tech: "react,typescript, ",
  },
  {
    title: "StargazersViewerApp",
    image: "./assets/stargazer.png",
    type: "Mobile Application",
    url: "https://github.com/LeleDallas/StargazersViewerApp",
    description:
      "StarGazers Viewer App is a mobile application that allows you to search for a GitHub user and it's repository and view its stargazers. Built using React Native and TypeScript, the application uses the GitHub API with graphql to fetch the stargazers of a repository.",
    tech: "react,typescript,graphql,githubactions",
  },
  {
    title: "WeatherWise",
    image: "https://github.com/LeleDallas/WeatherWise/raw/main/public/cover.png",
    type: "Web Development",
    description:
      "Weather application designed to provide accurate, real-time weather updates using the Open-Meteo API",
    url: "https://github.com/LeleDallas/WeatherWise",
    tech: "react,typescript,vite,vitest,githubactions",
  },
  {
    title: "myVem",
    image: "./assets/myDev.png",
    type: "Web Development",
    description:
      "myVem is the cloud service orchestration platform created by VEM Sistemi, which allows you to monitor and manage technological complexity.",
    url: "https://myvem.com/",
    tech: "react,typescript,vite,vitest,bitbucket",
  },
  {
    title: "TODO-list",
    image: "./assets/todo.png",
    type: "Web Development",
    description:
      "The TODO-list is a versatile and fully responsive application designed to help you manage your tasks and stay organized efficiently.",
    url: "https://github.com/LeleDallas/TODO-list",
    tech: "bun,react,typescript,vite,vitest,githubactions",
  },
  {
    title: "Cards Against Humanity",
    image: "./assets/CAH.png",
    type: "Web Development",
    description:
      "Cards Against Humanity: Fill in the Blank Edition - Unleash your dark humor! Hilarious party game where players fill in outrageous black card prompts with white cards. Create inside jokes, compete for the funniest combinations, and laugh uncontrollably. Get ready for twisted fun!",
    url: "https://github.com/LeleDallas/Cards-Against-Humanity",
    tech: "react,typescript,vite,vitest,mongodb,githubactions",
  },
  {
    title: "DERNetSoft Mobile",
    image: "./assets/mobileDER.png",
    type: "Mobile Application",
    description:
      "The DERNetSoft app helps connect you with your utility data and provides value-added services on top of it, including California's ELRP enrollment and notification system.",
    android: "https://play.google.com/store/apps/details?id=com.dernetsoft.dernetsoft&hl=en&gl=US",
    ios: "https://apps.apple.com/it/app/dernetsoft/id1579749243?uo=2",
    tech: "react,typescript,jest,mongodb,firebase",
  },

  {
    title: "TrackER",
    image: "./assets/tracker.png",
    type: "Web Development",
    description:
      "The project involves creating a web-based software solution for managing, tracking, and selling energy, catering to both energy vendors and building owners. Users can access two main interfaces, Vendor and Building Owner, after registering. The system includes a web application accessible from any internet-connected device and a web server composed of microservices.",
    url: "https://github.com/TrackER-Corporation",
    tech: "react,typescript,vite,vitest,mongodb,githubactions",
  },
  {
    title: "WarVerse",
    image: "./assets/warverse.png",
    type: "Software Development",
    description:
      "Warverse is a war simulator among multiple states written in Scala. It allows you to define the participating states, their populations, army units, relationships between them, and available resources. Once the simulation is started, it is updated on a daily basis until all the wars are resolved.",
    url: "https://github.com/GZaccaroni/pps-warverse",
    tech: "scala",
  },
  {
    title: "Uptune",
    image: "./assets/uptune.png",
    type: "Mobile (Android) Application",
    description:
      "Android app developed to provide a comprehensive and user-friendly platform for music lovers to purchase and listen to their favorite songs and albums digitally. The project was initiated to address the growing demand for a convenient and customizable music app that can cater to the needs of all music enthusiasts.",
    url: "https://github.com/LeleDallas/UpTune",
    tech: "androidstudio,java",
  },
  {
    title: "BomberMan",
    image: "./assets/bomber.png",
    type: "Software Development",
    description:
      "Java BomberMan 💣 is an Arcade game where players strategically place bombs to destroy obstacles and eliminate other players. The ultimate goal is to be the last one standing. Along the way, players can pick up power-ups that provide benefits such as larger explosions or the ability to place more bombs at once. However, players must be cautious as they can also be killed by their own bombs or by touching an enemy.",
    url: "https://github.com/LeleDallas/BomberMan",
    tech: "java",
  },
  {
    title: "DERNetSoft Web App",
    image: "./assets/mobileDER.png",
    type: "Web Development",
    description:
      "Software development at a technology startup in the energy sector, from requirements definition to deployment using React, React Native, TypeScript, and the MERN stack.",
    url: "https://www.dernetsoft.com/",
    tech: "react,typescript,python,jest,mongodb,githubactions,gcp",
  },
  {
    title: "skillsfolio",
    image: "./assets/skills.png",
    type: "Software Development",
    description:
      "Fully responsive personal portfolio website, responsive for all devices, built using React with Vite.",
    url: "https://github.com/LeleDallas/skillsfolio",
    tech: "react,typescript,vite,githubactions",
  },
];

export const downloadPdfResume = () => {
  fetch("public/assets/ResumeDallAra.pdf").then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Emanuele_DallAra_Resume.pdf";
      alink.click();
    });
  });
};
