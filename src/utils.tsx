import { BookObject, DataModel, ResumeObject, SocialObject } from "./types"

export const fullName = "Emanuele Dall'Ara"
export const email = "emanuele.dallara99@gmail.com"
export const role = "Software Engineer"
export const phone = "+39 340 098 1328"
export const birthday = "Oct 4, 1999"
export const location = "Cesena, Emilia-Romagna, ITA"
export const description = "I'm a Software Engineer from Cesena, Italy, with a passion for creating high-performance web and mobile applications. I enjoy turning complex problems into simple, beautiful and intuitive designs."
export const descriptionDetails = `I love building high-performance web and mobile apps. From requirements to deployment, I handle the entire development lifecycle with passion and precision. 
Keeping up with the latest trends in the industry is a priority, ensuring I always deliver top-notch, user-friendly solutions.
\nLet's collaborate and create something amazing together!`



export const navbarItems = ["About", "Resume", "Portfolio", "Bookshelf", "Contact"]

export const serviceItems = [
    {
        image: "./assets/icon-dev.svg",
        title: "Software development",
        text: "Excellence in Software Development: Creating modern, high-quality solutions with a professional touch."
    },
    {
        image: "./assets/icon-mobile.svg",
        title: "Mobile App Developer",
        text: "Transforming ideas into polished mobile applications for iOS and Android, backed by professional expertise."
    },
    {
        image: "./assets/icon-design.svg",
        title: "UI/UX Designer",
        text: "Crafting cutting-edge UI/UX experiences, where innovation meets professionalism."
    },
    {
        image: "./assets/icon-ci.svg",
        title: "DevOps",
        text: "Empowering Agile Software Development through DevOps with Continuous Integration"
    },
]

export const technologiesItems: Array<DataModel> = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
        title: "React/React Native",
        description: "I've leveraged the power of React and React Native to build dynamic and responsive web applications and mobile experiences. With React's component-based architecture, I crafted efficient and reusable UI components that ensured a smooth user interface across various devices and screen sizes. Whether it's developing feature-rich web applications or creating immersive mobile apps for both iOS and Android, I pride myself on delivering top-notch solutions that blend the best of modern technology and user-centric design.",
        purpose: "---"
    },
    {
        image: "https://vitejs.dev/logo-with-shadow.png",
        title: "Vite",
        description: "Taken web development to the next level, delivering blazing-fast and highly performant applications. By harnessing Vite's lightning-fast build system, I've optimized the development workflow, reducing build times significantly. This allowed me to focus on crafting efficient, modern, and feature-rich web applications without compromising on speed or user experience. Embracing Vite's simplicity and versatility, I've successfully built projects that showcase the true potential of cutting-edge web technologies, providing seamless user interactions and a delightful browsing experience.",
        purpose: "---"
    },
    {
        image: "https://vitest.dev/logo.svg",
        title: "Vitest",
        description: "Elevated the quality and reliability of my JavaScript and React Vite projects. As a powerful testing framework, Vitest has allowed me to write comprehensive test suites, ensuring that my code functions as expected and remains resilient to changes. By employing Vitest snapshot testing, I've effortlessly detected regressions and maintained code consistency across iterations. Whether writing unit tests, integration tests, or UI component tests, Vitest has been an invaluable tool in my toolkit, helping me deliver robust and bug-free applications.",
        purpose: "---"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
        title: "Java",
        description: "I've crafted robust and scalable applications that stand the test of time. Leveraging the language's versatility, I've developed a wide range of projects, from desktop applications to server-side systems. Java's object-oriented nature allowed me to create well-structured and maintainable codebases, ensuring ease of collaboration with other developers. Through Java's vast ecosystem of libraries and frameworks, I've implemented complex functionalities with efficiency and reliability. From enterprise solutions to small-scale projects, my Java expertise has driven the development of powerful software that addresses diverse business needs.",
        purpose: "---"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/6132/6132220.png",
        title: "Scala",
        description: "I've embraced the power of functional programming and object-oriented paradigms to build elegant and scalable applications. Scala's expressive syntax and strong type system allowed me to write concise and readable code, facilitating rapid development without sacrificing safety. Leveraging its seamless integration with Java, I've harnessed existing Java libraries and ecosystems while enjoying the benefits of functional programming offered by Scala. From building high-performance backend services to creating data-intensive applications, Scala has been my language of choice for crafting innovative solutions that push the boundaries of modern software development.",
        purpose: "---"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        title: "Python",
        description: "I've harnessed the immense potential of machine learning, driving data-driven insights and predictive capabilities. Leveraging popular libraries such as TensorFlow and Scikit-learn, I've developed cutting-edge machine learning models for various applications, from image recognition to natural language processing. Python's versatility and extensive libraries have also enabled me to automate operational tasks, streamlining processes and improving overall efficiency. Moreover, I've utilized Python for forecasting and data analysis, empowering businesses with valuable foresight and informed decision-making. As a Python enthusiast, I've leveraged its capabilities to create innovative solutions that optimize workflows, extract meaningful patterns from data, and make businesses future-ready.",
        purpose: "---"
    },
]

export const socialListIcons: Array<SocialObject> = [
    {
        url: "https://www.linkedin.com/in/emanuele-dall-ara-40b3311a7/",
        icon: "linkedin-fill",
    },
    {
        url: "https://github.com/LeleDallas",
        icon: "github"
    },
    {
        url: "https://leetcode.com/LeleDallas/",
        icon: "leetcode"
    },
    {
        url: "https://stackoverflow.com/users/20091055/dallas",
        icon: "stackoverflow"
    },
]


export const bookList: Array<BookObject> = [
    {
        title: "So good they can't ignore you",
        description: "",
        category: "Personal Growth",
        author: "Cal Newport",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Publication123/v4/b7/08/76/b708761e-45c8-43af-4e18-21095ef191f6/9781455509102.jpg/1200x600wz.png",
        link: "",
    },
    {
        title: "The seven spiritual laws of success",
        description: "",
        category: "Personal Growth",
        author: "",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Publication124/v4/94/23/22/942322b7-5156-c4df-d23d-78242b668a8c/52731bbf-38f0-4bb0-a226-9e2f5089a8d4_cover_image.jpg/1200x600wz.png",
        link: "",
    },
    {
        title: "The energy codes",
        description: "Personal Growth",
        category: "",
        author: "",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Publication113/v4/f2/26/57/f2265745-d601-d9ee-91ed-f7fe5cbfa8e1/9781501169328.jpg/1200x630wz.png",
        link: "",
    },
    {
        title: "Hustle Harder, Hustle Smarter",
        description: "",
        category: "Personal Growth",
        author: "Curtis Jackson",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/fb/2b/bb/fb2bbb1d-68cf-3350-281f-8e1b402e6032/9780062953834.jpg/1200x600wp.png",
        link: "",
    },
    {
        title: "Decoded",
        description: "",
        category: "Personal Growth",
        author: "Jay-Z",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Publication125/v4/f6/46/a9/f646a92a-d9d8-cac6-51b5-3af19babf7a1/9781588369598.jpg/1200x630wz.png",
        link: "",
    },
    {
        title: "The Marathon Don't Stop",
        description: `This “beautiful tribute to a legendary artist” (Quincy Jones) is the first in-depth biography of Nipsey Hussle, the hip-hop mogul, artist, and activist whose transformative legacy inspired a generation with his motivational lyrics and visionary business savvy—before he was tragically shot down in the very neighborhood he was dedicated to building up.
        For Nipsey Hussle, “The Marathon” was more than a mixtape title or the name of a clothing store; it was a way of life, a metaphor for the relentless pursuit of excellence and the willpower required to overcome adversity day after day. Hussle was determined to win the race to success on his own terms, and he wanted to see his whole community in the winner’s circle with him.
        A moving and powerful exploration of an extraordinary artist, The Marathon Don’t Stop places Hussle in historical context and unpacks his complex legacy. Combining on-the-ground reporting and candid interviews, “Rob Kenner has given us the book the world—and hip-hop and pop culture—has been waiting for…one that should be celebrated alongside the best biographies ever about iconic figures we have loved—and lost” (Kevin Powell, author of When We Free the World).`,
        category: "Personal Growth",
        author: "",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/40/a7/65/40a76590-4667-1182-62cc-b7d199a14087/9781797104935.jpg/1200x600wp.png",
        link: "",
    },
    {
        title: "The 48 Laws of Power",
        description: `The 48 Laws of Power is a candid and controversial examination of power and its many dynamics. If you want to understand people and ascend in the world, this book is a good starting place.
        You’ll learn about the nature of power, how to acquire it, and the dark ways in which people operate in the world. And in doing so, you’ll understand how to leverage power to get what you want, ideally using that knowledge to better the world.`,
        category: "Personal Growth",
        author: "",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Publication/v4/3d/d7/bb/3dd7bb73-c810-21b6-0e46-0cdfa478d8b0/9781101042458.jpg/1200x630wz.png",
        link: "",
    },
    {
        title: "Becoming Supernatural",
        description: "Becoming Supernatural marries some of the most profound scientific information with ancient wisdom to show how people like you and me can experience a more mystical life. Readers will learn that we are, quite literally supernatural by nature if given the proper knowledge and instruction, and when we learn how to apply that information through various meditations, we should experience a greater expression of our creative abilities; that we have the capacity to tune in to frequencies beyond our material world and receive more orderly coherent streams of consciousness and energy; that we can intentionally change our brain chemistry to initiate profoundly mystical transcendental experiences; and how, if we do this enough times, we can develop the skill of creating a more efficient, balanced, healthy body, a more unlimited mind, and greater access to the realms of spiritual truth.",
        category: "Personal Growth",
        author: "Dr. Joe Dispenza",
        image: "https://is4-ssl.mzstatic.com/image/thumb/Publication128/v4/4b/af/fe/4baffeae-d880-8202-3d36-6d67e23b123d/9781401953102.jpg/1200x630wz.png",
        link: "",
    },
]

export const resumeItem: Array<ResumeObject> = [
    {
        description: "Alma Mater Studiorum, University of Bologna",
        title: "Second cycle degree/two year master in Computer Science and Engineering",
        time: "2021 - 2023"
    },
    {
        description: "Alma Mater Studiorum, University of Bologna",
        title: "Bachelor in Computer Science and Engineering",
        time: "2018 - 2021"
    },
    {
        description: "ITT Blaise Pascal, Cesena",
        title: "Technical Technological Diploma",
        time: "2013 - 2018"
    },
]

export const experiencesItem: Array<ResumeObject> = [
    {
        description: `Responsible for utilizing extensive experience with React, React Native, TypeScript, MERN stack, microservices, GCP and Aveva Hub to build high-performance, responsive web and mobile applications, design and build data connectors for time-series data stores, and automate data analysis and scripting. Skilled in the entire software development lifecycle, from requirements gathering to testing and deployment, and passionate about building high-quality, user-friendly applications while staying up-to-date with the latest developments in the field.`,
        title: "Full Stack Developer at DERNetSoft",
        time: "2020 - Present"
    },
    {
        title: "at FabLabRomagna",
        description: `Designing and creating a web radio using Volumio software, an Arduino board, and a 3D printed case manufactured with AutoCAD, providing a customized and interactive radio experience.`,
        time: "Feb 2018 - Mar 2018"
    },
    {
        title: "Internship as Web Developer at QUEEN S.R.L",
        description: `Create and manage websites efficiently using the Joomla content management system, enabling seamless content updates and website administration.`,
        time: "Feb 2017 - Mar 2017"
    },
    {
        description: `Conducting comprehensive tests to identify and document software bugs, ensuring the website's optimal performance and user experience.`,
        title: "Internship as Application debugger at Flatme Networks srls",
        time: "Feb 2016 - Mar 2016"
    },
]