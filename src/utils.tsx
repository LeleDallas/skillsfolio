import { BookObject, DataModel, DataProjectModel, ResumeObject, SocialObject } from "./types"

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



export const navbarItems = ["About", "Resume", "Projects", "Bookshelf", "Contact"]

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
        description: "So Good They Can’t Ignore You sheds some much needed light on the “follow your passion” myth and shows you that the true path to work you love lies in becoming a craftsman of the work you already have, collecting rare skills and taking control of your hours in the process.",
        category: "Personal Growth",
        author: "Cal Newport",
        image: "./assets/calNewport.png",
        link: "https://www.zenflowchart.com/blog/so-good-they-cant-ignore-you-cal-newport-book-summary#:~:text=How%20do%20you%20find%20a,build%20and%20maintain%20job%20satisfaction.",
    },
    {
        title: "The seven spiritual laws of success: a practical guide to the fulfillment of your dreams",
        description: "Inspired in Hinduist and spiritualistic concepts, which preaches the idea that personal success is not the outcome of hard work, precise plans or a driving ambition, but rather of understanding our basic nature as human beings and how to follow the laws of nature. ",
        category: "Personal Growth",
        author: "Deepak Chopra",
        image: "./assets/7laws.png",
        link: "https://en.wikipedia.org/wiki/The_Seven_Spiritual_Laws_of_Success",
    },
    {
        title: "The Energy Codes: The 7-Step System to Awaken Your Spirit, Heal Your Body, and Live Your Best Life",
        description: "Transform your life with this revolutionary and accessible seven-step guide—grounded in energy medicine, neurobiology, and quantum physics—to awaken your true health and potential through energy healing.",
        category: "Personal Growth",
        author: "Sue Morter",
        image: "./assets/energy.png",
        link: "https://waiyancan.com/summary-the-energy-codes-by-sue-morter/",
    },
    {
        title: "Hustle Harder, Hustle Smarter",
        description: "For the first time, Curtis “50 Cent” Jackson opens up about his amazing comeback—from tragic personal loss to thriving businessman and cable's highest-paid executive—in this unique self-help guide, his first since his blockbuster New York Times bestseller The 50th Law.",
        category: "Autobiography",
        author: "Curtis '50 Cent' Jackson",
        image: "./assets/hhhs.png",
        link: "https://www.redital.com/2020/50-cent-opens-up-in-hustle-harder-hustle-smarter-book-review/#:~:text=Hustle%20Harder%2C%20Hustle%20Smarter%20is%20centered%20around%209%20themes%2C%20each,Ls%20and%20The%20Entitlement%20Trap.",
    },
    {
        title: "Decoded",
        description: "Decoded is the autobiography and memoir of rapper Jay-Z, published by Random House and released November 16, 2010 on hardcover and November 1, 2011 on paperback. The book combines lyrics, their explanations, anecdotes, reflections, and autobiographical information.",
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
        description: "Becoming Supernatural marries some of the most profound scientific information with ancient wisdom to show how people like you and me can experience a more mystical life. Readers will learn that we are, quite literally supernatural by nature if given the proper knowledge and instruction, and when we learn how to apply that information through various meditations, we should experience a greater expression of our creative abilities; that we have the capacity to tune in to frequencies beyond our material world and receive more orderly coherent streams of consciousness and energy; that we can intentionally change our brain chemistry to initiate profoundly mystical transcendental experiences; and how, if we do this enough times, we can develop the skill of creating a more efficient, balanced, healthy body, a more unlimited mind, and greater access to the realms of spiritual truth.",
        category: "Personal Growth",
        author: "Dr. Joe Dispenza",
        image: "./assets/supernatural.png",
        link: "https://www.allencheng.com/becoming-supernatural-book-summary-dr-joe-dispenza/",
    },
]

export const resumeItem: Array<ResumeObject> = [
    {
        description: "Alma Mater Studiorum, University of Bologna",
        title: "Master in Computer Science and Engineering",
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
        description: `Engaged in full-cycle software development at a technology startup in the energy sector, from requirements definition to deployment. 
        I participated in both frontend and backend development for the DERNetSoft application using React, React Native, TypeScript, and the MERN stack. 
        Crafted secure microservices APIs with standard authentication, compression, and rate limiting. 
        Developed data connectors for seamless integration with our time-series data store, managing diverse data sources. 
        Automated company processes and managed GitHub, implementing task automation and DevOps practices. 
        Led the development of the frontend, mobile, and component library to ensure intuitive interfaces and streamlined processes.`,
        title: "Software Engineer at DERNetSoft",
        time: "Nov 2020 - Oct 2023"
    },
    {
        title: "Internship IoT Developer at FabLabRomagna",
        description: `Designing and creating a web radio using Volumio software, a Raspberry PI board, and a 3D printed case manufactured with AutoCAD, providing a customized and interactive radio experience.`,
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

export const projects: Array<DataProjectModel> = [
    {
        title: "TODO-list",
        image: "./assets/todo.png",
        type: "Web Development",
        description: "The TODO-list is a versatile and fully responsive application designed to help you manage your tasks and stay organized efficiently.",
        url: "https://github.com/LeleDallas/TODO-list",
        tech: [
            "https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://vitejs.dev/logo-with-shadow.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
        ]
    },
    {
        title: "Cards Against Humanity",
        image: "./assets/CAH.png",
        type: "Web Development",
        description: "Cards Against Humanity: Fill in the Blank Edition - Unleash your dark humor! Hilarious party game where players fill in outrageous black card prompts with white cards. Create inside jokes, compete for the funniest combinations, and laugh uncontrollably. Get ready for twisted fun!",
        url: "https://github.com/LeleDallas/Cards-Against-Humanity",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://vitejs.dev/logo-with-shadow.png",
            "https://vitest.dev/logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
        ]
    },
    {
        title: "Uptune",
        image: "./assets/uptune.png",
        type: "Mobile (Android) Application",
        description: "Android app developed to provide a comprehensive and user-friendly platform for music lovers to purchase and listen to their favorite songs and albums digitally. The project was initiated to address the growing demand for a convenient and customizable music app that can cater to the needs of all music enthusiasts.",
        url: "https://github.com/LeleDallas/UpTune",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
        ]
    },
    {
        title: "TrackER",
        image: "./assets/tracker.png",
        type: "Web Development",
        description: "The project involves creating a web-based software solution for managing, tracking, and selling energy, catering to both energy vendors and building owners. Users can access two main interfaces, Vendor and Building Owner, after registering. The system includes a web application accessible from any internet-connected device and a web server composed of microservices.",
        url: "https://github.com/TrackER-Corporation",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://vitejs.dev/logo-with-shadow.png",
            "https://vitest.dev/logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
        ]
    },
    {
        title: "BomberMan",
        image: "./assets/bomber.png",
        type: "Software Development",
        description: "Java BomberMan 💣 is an Arcade game where players strategically place bombs to destroy obstacles and eliminate other players. The ultimate goal is to be the last one standing. Along the way, players can pick up power-ups that provide benefits such as larger explosions or the ability to place more bombs at once. However, players must be cautious as they can also be killed by their own bombs or by touching an enemy.",
        url: "https://github.com/LeleDallas/BomberMan",
        tech: ["https://cdn-icons-png.flaticon.com/512/5968/5968282.png"]
    },
    {
        title: "WarVerse",
        image: "./assets/warverse.png",
        type: "Software Development",
        description: "Warverse is a war simulator among multiple states written in Scala. It allows you to define the participating states, their populations, army units, relationships between them, and available resources. Once the simulation is started, it is updated on a daily basis until all the wars are resolved.",
        url: "https://github.com/GZaccaroni/pps-warverse",
        tech: ["https://cdn-icons-png.flaticon.com/512/6132/6132220.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",]
    },
    {
        title: "skillsfolio",
        image: "./assets/skills.png",
        type: "Software Development",
        description: "Fully responsive personal portfolio website, responsive for all devices, built using React with Vite.",
        url: "https://github.com/LeleDallas/skillsfolio",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://vitejs.dev/logo-with-shadow.png",
            "https://vitest.dev/logo.svg",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
        ]
    },
    {
        title: "DERNetSoft Mobile",
        image: "./assets/mobileDER.png",
        type: "Mobile Application",
        description: "The DERNetSoft app helps connect you with your utility data and provides value-added services on top of it, including California's ELRP enrollment and notification system.",
        android: "https://play.google.com/store/apps/details?id=com.dernetsoft.dernetsoft&hl=en&gl=US",
        ios: "https://apps.apple.com/it/app/dernetsoft/id1579749243?uo=2",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
        ]
    },
    {
        title: "DERNetSoft Web App",
        image: "./assets/mobileDER.png",
        type: "Web Development",
        description: "Software development at a technology startup in the energy sector, from requirements definition to deployment using React, React Native, TypeScript, and the MERN stack.",
        url: "https://www.dernetsoft.com/",
        tech: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
            "https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png",
            "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png",
        ]
    },

]

export const downloadPdfResume = () => {
    fetch('public/assets/ResumeDallAra2023.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Emanuele_DallAra_Resume.pdf';
            alink.click();
        })
    })
}
