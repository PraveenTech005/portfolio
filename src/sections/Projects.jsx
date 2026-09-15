import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projectShow, setProjectShow] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const disableScroll = () => {
      if (showModal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    };

    disableScroll();
  }, [showModal]);

  const project = [
    {
      title: "MechCommerce",
      description:
        "MechCommerce is my final-year graduation project — a full-stack automotive e-commerce ecosystem built as two React Native (Expo) apps: a customer app and an admin dashboard app, backed by a Node.js/Express/MongoDB API. Users can browse parts, vehicles, and accessories by category, check vehicle compatibility before buying, and check out with a persistent cart and saved addresses. The admin app includes a custom 'bubble picker' UI for assigning vehicle compatibility, real-time order tracking, and automatic inventory sync on every order.",
      type: "Graduation Project / Mobile App",
      var: 2,
      image: "/projects/mechcommerce.png",
      date: "Apr 2026",
      url: "https://github.com/PraveenTech005/MechCommerce",
      featured: true,
    },
    {
      title: "Pixelog",
      description:
        "Pixelog is a professional portfolio website I developed for a client running a creative agency specializing in advertising and digital services. The site showcases their core offerings, including digital marketing, web development, branding, and design. Built with a focus on clean visuals and smooth navigation, the website helps establish the agency's online presence while reflecting their creative identity. This project allowed me to collaborate closely with the client to understand their vision and translate it into a responsive and visually compelling web experience.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/pixelog.png",
      date: "Dec 2025",
      live: "https://pixelog.vercel.app",
      url: "https://github.com/PraveenTech005/Pixelog",
    },
    {
      title: "Login-Signup",
      description:
        "A simple authentication system built with the MERN stack (MongoDB, Express, React, Node.js).This app demonstrates signup, login, JWT authentication, and protected routes with a minimal and beginner-friendly approach.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/login-signup.png",
      date: "Aug 2025",
      live: "https://login-signup-praveen.vercel.app/",
      url: "https://github.com/PraveenTech005/login-signup",
    },
    {
      title: "Pacman Typing",
      description:
        "A fast-paced real-time typing game inspired by Pacman — featuring wave-based challenges, live player stats, and a dynamic leaderboard.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/pacman.png",
      date: "Oct 2025",
      live: "https://pacman-typing.vercel.app/",
      url: "https://github.com/PraveenTech005/pacman",
      featured: true,
    },
    {
      title: "OLMS",
      description:
        "OLMS was my first attempt at building a full-stack web application during my internship. The goal was to create an online platform where students could access courses, track progress, and interact with instructors. I worked on both frontend and backend development, gaining hands-on experience with user authentication, course management, and database integration. Although the project was only partially completed, it gave me a solid foundation in full-stack development and team collaboration.",
      type: "Full Stack Web App",
      var: 0,
      image: "/projects/olms.png",
      date: "July 2025",
      url: "https://github.com/PraveenTech005/OLMS",
    },
    {
      title: "Custom bot",
      description:
        "Custombot is an AI chatbot that dynamically adapts to any website's content. By inputting a site URL, the bot scrapes the site's data and uses it as the knowledge base to answer user questions contextually. It leverages the language model via the Groq API to provide fast, accurate, and relevant responses. This project showcases my ability to integrate real-time web scraping, natural language processing, and third-party AI APIs to build intelligent user-facing tools.",
      type: "AI / Web App",
      var: 1,
      image: "/projects/custom.png",
      date: "June 2025",
      url: "https://github.com/PraveenTech005/Custombot",
    },
    {
      title: "BG-Styles",
      description:
        "BG-styles is a simple, lightweight project featuring a collection of reusable background design templates built for HTML and CSS. It provides a visual gallery of styled cards showcasing different background patterns and effects. When a user clicks on any card, a pop-up displays the corresponding HTML, CSS, and container code—ready to copy and paste into their own UI. This project was aimed at speeding up UI development by offering quick access to aesthetic, copyable background snippets.",
      type: "Frontend Utility / UI Tool",
      var: 0,
      image: "/projects/bg-styles.png",
      date: "June 2025",
      live: "https://bg-styles.vercel.app",
      url: "https://github.com/PraveenTech005/bg-styles",
    },
    {
      title: "Taskify",
      description:
        "Taskify is a mobile application I developed during my internship using Flutter. The app allows users to create, organize, and manage their daily tasks efficiently through a clean and user-friendly interface. Key features include task creation, status tracking, and task categorization. This project helped me strengthen my understanding of mobile app development, Flutter widgets, and state management, while also applying practical design principles to enhance the user experience.",
      type: "Mobile App",
      var: 2,
      image: "/projects/taskify.png",
      date: "March 2025",
      url: "https://github.com/PraveenTech005/Taskify",
    },
    {
      title: "KrishnaMines",
      description:
        "KrishnaMines was my first real-world web development project, where I was given the opportunity to build the frontend of a corporate website through a referral from my Head of Department. The site was developed to represent the company's profile, services, and contact information with a clean and structured layout. This project marked my entry into practical frontend development, helping me understand the importance of responsive design, real client requirements, and production-ready code.",
      type: "Frontend Web Project",
      var: 0,
      image: "/projects/krishnamines.png",
      date: "October 2024",
      url: "https://github.com/PraveenTech005/KrishnaMines",
    },
    {
      title: "NM-SWMS",
      description:
        "NM-SWMS is an IoT-based Smart Waste Management System developed as part of the Naan Mudhalvan initiative. Using Wokwi for simulation, I created a virtual environment where sensors monitor the fill level of waste bins. The sensor data is updated in real-time to the ThingSpeak IoT platform, enabling live monitoring and analytics. I also built a React-based web dashboard to visually display the sensor readings, helping users track waste levels and optimize collection schedules. This project combines IoT, real-time data communication, and frontend development to offer a scalable smart city solution.",
      type: "IoT Project / Web Dashboard",
      var: 3,
      image: "/projects/nm-swms.png",
      date: "May 2024",
      url: "https://github.com/PraveenTech005/NM-SWMS",
    },
    {
      title: "An IoT Based Wifi Connected Car-Controlling System",
      description:
        "This project was developed as my final-year diploma (D.EEE) project, combining IoT and health monitoring for intelligent vehicle control and emergency response. The system is a Wi-Fi-controlled smart car prototype equipped with health sensors to monitor the passenger's heart rate via a wristband. When the BPM drops below a threshold (e.g., indicating a possible stroke), the system automatically captures the live location using an A9G development board and sends alerts via SMS to pre-configured contacts such as relatives and nearby hospitals.",
      type: "IoT / Embedded System Project",
      var: 3,
      image: "/projects/WiFi-car.jpg",
      date: "April 2023",
      pdf: "projects/WiFi-car.pdf",
    },
  ];
  return (
    <section
      className="w-full min-h-screen flex flex-col py-20 px-6 lg:px-20"
      id="projects"
    >
      <div className="flex justify-between items-end mb-12">
        <h2 className="mont text-3xl lg:text-4xl dark:text-white text-black">
          Featured Projects
        </h2>
        <p className="dark:text-gray-500 text-gray-400 text-sm hidden lg:block">
          A showcase of my recent work
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[210px] gap-4">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
            big={item.featured}
            onOpen={(p) => {
              setModalProject(p);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      {showModal && (
        <div className="top-0 left-0 w-full h-screen fixed z-200 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowModal(false)}
          />
          <button
            className="fixed top-5 right-5 z-210 bg-black rounded-full p-2 border border-white/20 cursor-pointer text-white hover:scale-110 transition"
            onClick={() => setShowModal(false)}
          >
            <MdClose size={22} />
          </button>
          <ProjectModal item={modalProject} />
        </div>
      )}
    </section>
  );
};

export default Projects;
