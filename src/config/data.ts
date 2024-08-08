import Icon from "@iconify/svelte";
export const NavItems = [
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Experiance",
    url: "#experiance",
  },
  {
    name: "Articles",
    url: "#articles",
  },
  {
    name: "Contact",
    url: "#",
  },
];

export const Hero = {
  description:
    "For more than two decades, I've been with a leading investment bank, specializing in the tech side of Equities Front Office Solutions. You'll often find me brainstorming, designing," +
    "and fine-tuning tech solutions that are tailor-made to tackle the unique challenges in the equities front office scene. I'm all about crafting strategies that not only boost the bottom line but also bring out the best in teams. Whether it's streamlining trading processes, smoothing out the kinks, or amping up the client experience, I'm constantly on the lookout for ways to make tech work smarter in the equities world.",
  motivation:
    "I'm all about finding fresh, unique ways to approach things. Whether it's crafting sleek UIs, coding software, or building HTML pages and dynamic PowerPoint presentations, I'm drawn to the art of making things stand out. While I'm not an artist who can draw, I've always had an eye for aesthetics. I don't claim to be a design master, but I believe I have a good sense of it. I always wanted to learn one of the modern web languages like React or Angular. I could not, mainly due to packed schedules. I used to be all about Microsoft technologies, working on desktop and backend services using .NET Core. But lately, I've been diving into Java, Spring Boot, Python React and Svelte, and it's been pretty amazing, I have to say. I'm feeling like a true full-stack developer now, and I've got myself to thank for taking this leap.",
  image: "I'm a full-stack developer",
};

export const Icons = {
  technology: "streamline:ai-technology-spark",
  practices: "fa6-solid:hands",
  achievements: "foundation:social-skillshare",
  personality: "mdi:person-star",
};

export const DevelopmentPractices = [
  {
    icon: "",
    name: "DevOps",
    Comment: "",
  },
  {
    icon: "",
    name: "Agile-Scrum",
    Comment: "",
  },
  {
    icon: "",
    name: "TDD/BDD",
    Comment: "",
  },
  {
    icon: "",
    name: "CI/CD",
    Comment: "",
  },
  {
    icon: "",
    name: "Jenkins",
    Comment: "",
  },
  {
    icon: "",
    name: "Git",
    Comment: "",
  },
  {
    icon: "",
    name: "Nunit",
    Comment: "",
  },
  {
    icon: "",
    name: "xUnit",
    Comment: "",
  },
  {
    icon: "",
    name: "SpecFlow",
    Comment: "",
  },
  {
    icon: "",
    name: "Junit",
    Comment: "",
  },
  {
    icon: "",
    name: "Cucumber",
    Comment: "",
  },
];

export const Achievements = [
  {
    icon: "",
    name: "Investment Bank",
    Comment: "",
  },
  {
    icon: "",
    name: "Equities Front Office Solutions",
    Comment: "",
  },
  {
    icon: "",
    name: "Order Management Systems",
    Comment: "",
  },
  {
    icon: "",
    name: "Consistant Top Performer",
    Comment: "",
  },
  {
    icon: "",
    name: "Hackathon Winner",
    Comment: "",
  },
  {
    icon: "",
    name: "Git",
    Comment: "",
  },
  {
    icon: "",
    name: "Nunit",
    Comment: "",
  },
  {
    icon: "",
    name: "xUnit",
    Comment: "",
  },
  {
    icon: "",
    name: "SpecFlow",
    Comment: "",
  },
  {
    icon: "",
    name: "Junit",
    Comment: "",
  },
  {
    icon: "",
    name: "Cucumber",
    Comment: "",
  },
];

export const Skills = [
  {
    icon: "logos:c-sharp",
    name: "C#",
    experience: "2+ years",
  },
  {
    icon: "skill-icons:dotnet",
    name: ".NET 6.0",
    experience: "2+ years",
  },
  {
    icon: "devicon:java",
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: "logos:spring-icon",
    name: "SpringBoot",
    experience: "2+ years",
  },

  {
    icon: "skill-icons:javascript",
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: "vscode-icons:file-type-python",
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: "skill-icons:react-light",
    name: "React",
    experience: "2+ years",
  },
  {
    icon: "vscode-icons:file-type-svelte",
    name: "Svelte",
    experience: "2+ years",
  },
  {
    icon: "skill-icons:reactivex-light",
    name: "Reactive Programming",
    experience: "2+ years",
  },
  {
    icon: "devicon:tailwindcss",
    name: "Tailwind CSS",
    experience: "2+ years",
  },
  {
    icon: "vscode-icons:file-type-graphql",
    name: "GraphQL",
    experience: "2+ years",
  },
  {
    icon: "logos:cucumber",
    name: "Cucumber",
    experience: "2+ years",
  },
  {
    icon: "devicon:oracle",
    name: "Oracle",
    experience: "2+ years",
  },
  {
    icon: "devicon:postgresql",
    name: "PostgreSQL",
    experience: "2+ years",
  },
  {
    icon: "bi:database-add",
    name: "Sybase",
    experience: "2+ years",
  },
  {
    icon: "devicon:mongodb",
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: "devicon:redis",
    name: "Redis",
    experience: "2+ years",
  },
];
export const Personality = [
  {
    icon: "",
    name: "#pragmatic",
  },
  {
    icon: "",
    name: "#passionate",
  },
  {
    icon: "",
    name: "#accountable",
  },
  {
    icon: "",
    name: "#collaborative",
  },
  {
    icon: "",
    name: "#selfless",
  },
  {
    icon: "",
    name: "self-driven",
  },
  {
    icon: "",
    name: "#leader",
  },
  {
    icon: "",
    name: "#trustworthy",
  },
  {
    icon: "",
    name: "#empathtic",
    Comment: "",
  },
  {
    icon: "",
    name: "#innovative",
    Comment: "",
  },
  {
    icon: "",
    name: "#respectful",
    Comment: "",
  },
  {
    icon: "",
    name: "#adaptable",
    Comment: "",
  },
];

export type Project = {
  name: string;
  description: string;
  techStack: [];
  github: string;
};

export const Projects = [
  {
    name: "Equities Trading Platform",
    description:
      "A platform that allows traders to trade equities on the stock exchange. It provides a user-friendly interface to place orders, view order status, and track the performance of the trades.",
    techStack: "Java, Spring Boot, React, Svelte, GraphQL, PostgreSQL, Redis",
    github: "",
  },
];

export const Experiance = [
  {
    name: "Lead APAC Front Office Applications | Credit Suisse",
    description:
      "I currently serve as the Technical and Delivery Lead for the Front Office technology team, overseeing mission-critical applications across Order Management, Program Trading, and IOI teams. In this capacity, I am entrusted with managing and steering these vital applications to ensure their optimal performance. Collaboration is at the heart of my role. I work closely with diverse teams, including support, compliance, business, and IT, to swiftly address system issues or incidents. This cooperative approach ensures that our technology ecosystem functions seamlessly, meeting both operational and regulatory requirements. I actively participate in software development projects, where I take a hands-on approach in designing, developing, and testing software code. I prioritize scalability, reliability, and regulatory compliance in our technology solutions, emphasizing the importance of maintaining a production environment of exceptional quality. A significant part of my journey has been guiding our team through a transformative process. I introduced agile methodologies, which have enhanced our adaptability and responsiveness. We also adopted DevOps practices, streamlined our operations with the establishment of robust CI/CD pipelines, and harnessed the power of the bank's platform-as-a-service (Openshift) to efficiently develop and deploy microservices.The ongoing transformation journey not only reflects my professional growth but also symbolizes our collective pursuit of excellence in technology.",
    technology:
      " C#, .Net 6, Redis, GraphQL, Mongo, Sybase, Oracle, PostgreSQL, BitBucket, Openshift, Grafana, SonarQube, Jenkins",
    timeline: "2016 - Till date",
  },
  {
    name: "Lead APAC Order Management Platform Migration | Credit Suisse",
    description:
      "I had the privilege of spearheading the critical APAC Order Management platform migration – a multi-million-dollar project spanning several years. This endeavor marked a turning point, as we assembled a dedicated team, unified by a shared vision of transformation. Over the course of three intense years, we undertook the formidable task of transitioning from the legacy VC++ platform to a modern C#-based system. This migration presented a series of formidable challenges that tested the limits of our collective skills and determination. It was, without a doubt, the most demanding project in my career, but it was precisely this challenge that fueled our innovation and commitment.The culmination of our hard work and tenacity was a triumphant rollout of the new application, now serving over 400 users across 12 locations. This success not only represented a technological milestone but also a testament to our unwavering dedication to excellence. The project's significance resonates not just in its technical achievement but in the invaluable lessons it imparted and the bonds formed within the team. It underscored our ability to adapt, persevere, and collaborate, forging a brighter future for our organization's technological landscape.",
    technology: " C#, Sybase, Oracle",
    timeline: "2011 -  2014",
  },
  {
    name: "Lead APAC Order Management System | Credit Suisse",
    description:
      "I was given the responsibility to lead the mission-critical APAC order management system, which represented a pivotal moment in my career. This role allowed me to navigate a multitude of challenges and adapt to various changes effectively. I focused on increasing the application's capacity and throughput, achieving significant improvements. Over time, I successfully stabilized the product, ensuring its reliability and performance. This experience marked a transformative leap in my professional journey, enabling me to develop crucial leadership skills. It also instilled in me the ability to thrive in a dynamic and demanding environment. I take pride in the accomplishments of enhancing the system's efficiency and ensuring its mission-critical status. This role has been a valuable stepping stone, offering valuable insights and lessons for my career growth",
    technology: " VC++, Sybase, Oracle",
    timeline: "2006 - 2011",
  },
  {
    name: "Electronic Market Making | Credit Suisse",
    description:
      "I worked as a developer on an Electronic Market Making application, where my role involved designing and implementing innovative trading strategies to enhance the platform's capabilities.",
    technology: " C#",
    timeline: "2005 - 2006",
  },
  {
    name: "Japan Margin Trading | Credit Suisse",
    description:
      "Created a Equities Margin Trading System designed to facilitate trading in equities (stocks) with the use of margin, which allows traders to borrow funds to amplify their investment positions. ",
    technology: " Java (web ui), VC++ (back-end)",
    timeline: "2005 - 2006",
  },
  {
    name: "Front Office Automation | Credit Suisse",
    description:
      "Developing various tools for front office automation. Most important being a excel macro automation tool developed in VC++. This tool features a plugin-based architecture for parsing client order Excel files from Outlook. It offers seamless integration with Outlook, automatically extracting data from emails or attachments. The parsed data was then efficiently transferred to a Front Office System (FOS) application, streamlining the order management process. The tool's automation, pattern recognition,  data validation, and user-friendly interface contributed to improved operational efficiency and accuracy in handling client orders.This tool received praise from then APAC IT Head for its innovative approach and capabilities. ",
    technology: " VC++, VBA, Oracle",
    timeline: "2004-2005",
  },
  {
    name: "Software Developer | Enventure Solution",
    description:
      "Developing software in the Electronic Design Automation domain for a prestigious client called Cadence Design Systems.",
    technology: " VC++, VBA, Oracle",
    timeline: "2000-2004",
  },
];

export const Articles = [
  {
    name: "React-Inversify",
    description: "Dependency injection in React using inversify.",
    url: "https://medium.com/@kaljessy/react-dependency-injection-using-inversify-b4e1d63abc72",
  },
  {
    name: "React-Rxjs",
    description: "How to use Reactive Extensions in React.",
    url: "https://medium.com/@kaljessy/react-state-management-using-rxjs-58a4d523d611",
  },
  {
    name: "K6 Load Testing",
    description: "Performance Testing using Grafana k6",
    url: "https://dev.to/jpothanc/performance-testing-using-grafana-k6-3pg9",
  },
  {
    name: "Publish React lib to npm",
    description: "Publish React library to npm.",
    url: "https://medium.com/@kaljessy/publish-your-react-library-to-npm-using-vite-136dc81e368d",
  },
  {
    name: "Creating and Uploading Python Libraries",
    description: "Creating and Uploading Python Libraries",
    url: "https://medium.com/@kaljessy/building-and-sharing-a-guide-to-creating-and-uploading-python-libraries-56998a001a2c",
  },
  {
    name: "Python Through Microservice Development",
    description: "Discovering Python Through Microservice Development",
    url: "https://medium.com/@kaljessy/discovering-python-through-microservice-development-cda7b8f97848",
  },
  {
    name: "Desktop Apps using Tauri",
    description: "Build Web Desktop Apps using Tauri.",
    url: "https://medium.com/@kaljessy/build-web-desktop-apps-using-tauri-6fe12586016a",
  },
  {
    name: "Desktop Apps using Electron",
    description: "Build Web Desktop Apps using Electron.",
    url: "https://medium.com/@kaljessy/build-web-desktop-apps-using-electron-a4c6e226290c",
  },
  {
    name: "Chating with OpenAI",
    description: "Chating with OpenAI using Python.",
    url: "https://medium.com/@kaljessy/chating-with-openai-using-python-3ae5a14b4501",
  },
  {
    name: "AI Assitant using RAG",
    description: "Personal AI Assitant using RAG and ChromaDB.",
    url: "https://medium.com/@kaljessy/personal-ai-assitant-using-rag-and-chromadb-6fd5c259da41",
  },
  {
    name: "Svelt, Felt Better?",
    description: "A attempt to promote Svelte, a modern web framework.",
    url: "https://medium.com/@kaljessy/svelt-felt-better-ff7ce0f81977",
  },
];
